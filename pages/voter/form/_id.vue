<template>
  <div>
    <v-alert :type="signalStatusType">{{ signalStatusText }}</v-alert>
    <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
      <v-card v-if="selectedForm && appRunning" width="100%">
        <form>
          <div class="d-flex flex-row justify-center py-5 display-1">
            {{ selectedForm.name }}
          </div>
          <div class="d-flex flex-row justify-center px-12 mb-6 body">
            {{ selectedForm.infoText }}
          </div>
          <v-divider class="mb-10"></v-divider>
          <div
            v-for="(question, index) in selectedForm.votingFormItems"
            :key="question.votingFormItemId"
            class="px-12"
          >
            <div class="body-2 mb-2">Question {{ index + 1 }}</div>
            <div class="title">{{ question.question }}</div>
            <div class="pl-5">
              <v-radio-group
                @change="handleUserAnswerChange(question.question, $event)"
              >
                <v-radio
                  v-for="option in question.votingFormItemOptions"
                  :key="option.votingFormItemOptionId"
                  :label="option.option"
                  :value="option.option"
                  class="my-2"
                >
                </v-radio>
                <!-- Last option is always with value null as user dont want to answer this question -->
                <v-radio
                  class="my-2"
                  label="I do not want to answer"
                  value="N/A"
                ></v-radio>
              </v-radio-group>
              <v-divider class="mb-10"></v-divider>
            </div>
          </div>

          <div class="d-flex flex-row justify-center px-12 mb-6 body">
            <v-btn x-large color="primary" @click="submitForm">Send form</v-btn>
          </div>
        </form>
      </v-card>

      <div v-else>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </div>

      <v-dialog persistent :value="!appRunning" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            Sign app not detected
          </v-card-title>

          <v-card-text class="pa-5">
            Please start our sign app to procced on voting
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" to="/voter">Go back</v-btn>
          </v-card-actions>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>

      <v-dialog persistent :value="waitingForSign" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            Please sign your votes in app
          </v-card-title>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
const signalR = require('@microsoft/signalr')

export default {
  middleware: 'authenticated',
  data() {
    return {
      signalStatus: 'not-connected',
      qaIdentity: '',
      qaCertHash: '',
      signalStatusType: 'warning',
      signalStatusText: 'Detecting..',
      userAnwers: {},
      allLists: [],
      appRunning: false,
      waitingForSign: false
    }
  },
  computed: {
    selectedForm() {
      return (
        this.allLists &&
        this.allLists.find(
          (item) => item.votingFormId === this.$route.params.id
        )
      )
    }
  },
  mounted() {
    this.fetchList()

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:58080/hubs/signin')
      .build()

    this.start()
    /*
    this.connection.onreconnecting(function() {
      this.signalStatus = 'reconnecting'
    })
    this.connection.onreconnected(function() {
      this.signalStatus = 'reconnected'
    })
    this.connection.ondisconnected(function() {
      this.signalStatus = 'disconnected'
      setTimeout(function() {
        this.connection.start()
      }, 5000) // Restart connection after 5 seconds.
    })
    this.connection.on('Connecting', () => {
      alert('connecting')
    })
    /**/
    this.connection.on('Status', (status, identity, certHash) => {
      this.signalStatus = status
      this.qaIdentity = identity
      this.qaCertHash = certHash
      this.setSignalRStatus()
    })
    this.connection.on('Authenticate', (cert) => {
      const fd = new FormData()
      fd.append('base64message', cert)
      this.$axios
        .post('v1/Voter/SubmitVote', fd)
        .then(() => {
          this.waitingForSign = false
          this.$router.push('/voter')
          this.$store.dispatch(
            'snackbar/openSuccess',
            'Your votes was signed and counted!'
          )
        })
        .catch((e) => {
          this.waitingForSign = false
          this.$store.dispatch('snackbar/openError', e.response.data.detail)
        })
    })
    this.connection.on('Logout', (questionId, score) => {
      this.authenticated = 'Unauthenticated'
      // questionHub.$emit('score-changed', { questionId, score })
    })
  },
  methods: {
    async start() {
      try {
        await this.connection.start()
        console.assert(
          this.connection.state === signalR.HubConnectionState.Connected
        )
        this.appRunning = true
        this.getStatusFromServer()
      } catch (err) {
        console.assert(
          this.connection.state === signalR.HubConnectionState.Disconnected
        )
        setTimeout(() => this.start(), 5000)
      }
    },
    async getStatusFromServer() {
      try {
        await this.connection.invoke('getStatus')
      } catch (err) {
        console.log(err)
      }
    },

    ...mapActions('voter', ['performFetchAllVoterForms']),
    submitForm() {
      const toSend = {
        votingForm: this.selectedForm.name,
        answers: this.userAnwers,
        time: new Date(),
        votingFormId: this.$route.params.id
      }
      this.connection.invoke(
        'SignMessage',
        btoa(JSON.stringify(toSend)),
        'EnVoterAnswer'
      )
      this.waitingForSign = true
    },
    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    },
    async fetchList() {
      const data = await this.performFetchAllVoterForms()
      this.allLists = data
    },
    setSignalRStatus() {
      let isOk = false
      switch (this.signalStatus) {
        case 'not-connected':
          this.signalStatusText = 'The website is not connected to the server'
          this.signalStatusType = 'warning'
          break
        case 'identity-not-selected':
          this.signalStatusText =
            'Please select identity first in the QesadilaAuth'
          this.signalStatusType = 'warning'
          break
        case 'identity-selected':
          if (this.selectedForm) {
            if (this.selectedForm.listOfValidCertificatesForSignature) {
              if (
                this.selectedForm.listOfValidCertificatesForSignature.includes(
                  this.qaCertHash
                )
              ) {
                this.signalStatusText =
                  'You are signed in as valid voter in QesadilaAuth: ' +
                  this.qaIdentity
                this.signalStatusType = 'info'
                isOk = true
              }
            }
          }
          if (!isOk) {
            this.signalStatusText =
              'You are not signed in as valid voter in QesadilaAuth: ' +
              this.qaIdentity
            this.signalStatusType = 'warning'
          }
          break
        case 'reconnecting':
          this.signalStatusText = 'reconnecting'
          this.signalStatusType = 'warning'
          break
        case 'reconnected':
          this.signalStatusText = 'reconnected'
          this.signalStatusType = 'warning'
          break
        case 'disconnected':
          this.signalStatusText = 'disconnected'
          this.signalStatusType = 'warning'
          break
      }
    }
  }
}
</script>
