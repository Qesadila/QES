<template>
  <div>
    <v-alert :type="signalStatusType">{{ signalStatusText }}</v-alert>
    <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
      <v-card v-if="selectedForm && appRunning" width="100%">
        <form>
          <div class="d-flex flex-row justify-center py-5 display-1">
            {{ selectedForm.name }}
          </div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <th>Is public</th>
                  <td>
                    {{ isPublic }}
                  </td>
                </tr>
                <tr>
                  <th>Voting started at</th>
                  <td>
                    {{ openFrom }}
                  </td>
                </tr>
                <tr>
                  <th>Voting open until</th>
                  <td>
                    {{ openUntil }}
                  </td>
                </tr>
                <tr>
                  <th>Ending type</th>
                  <td>
                    {{ endingType }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider class="mb-10"></v-divider>
          <div
            v-for="(question, index) in selectedForm.votingFormItems"
            :key="question.votingFormItemId"
            class="px-12"
          >
            <div class="body-2 mb-2">
              {{ `${$t('voter.question')} ${index + 1}` }}
            </div>
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
                  :label="$t('voter.labelDoNotWantToAnswer')"
                  value="N/A"
                ></v-radio>
              </v-radio-group>
              <v-divider class="mb-10"></v-divider>
            </div>
          </div>

          <div class="d-flex flex-row justify-center px-12 mb-6 body">
            <v-btn x-large color="primary" @click="submitForm">{{
              $t('voter.submitForm')
            }}</v-btn>
          </div>
        </form>
      </v-card>

      <div v-else>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </div>

      <v-dialog persistent :value="!appRunning" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            {{ $t('voter.signAppNotFound') }}
          </v-card-title>

          <v-card-text class="pa-5">
            {{ $t('voter.startSignAppForProceed') }}
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" to="/voter">{{
              $t('voter.backButton')
            }}</v-btn>
          </v-card-actions>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>

      <v-dialog persistent :value="waitingForSign" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            {{ $t('voter.signVoteInApp') }}
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
    },
    openFrom() {
      const time = this.selectedForm.openFrom
      const d = new Date(time)
      return d.toLocaleString()
    },
    openUntil() {
      const time = this.selectedForm.openUntil
      const d = new Date(time)
      return d.toLocaleString()
    },
    endingType() {
      if (!this.selectedForm.endingType) return 'Type not defined'
      return this.$t('votingFormManager.' + this.selectedForm.endingType)
    },
    isPublic() {
      if (this.selectedForm.isPublic) return this.$t('general.yes')
      return this.$t('general.no')
    }
  },

  mounted() {
    this.fetchList()

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:58080/hubs/signin')
      .build()

    this.start()
    this.connection.on('Status', (status, identity, certHash) => {
      // this.$store.state.signalR.signalRStatus = status
      // this.$store.state.signalR.signalRCertHash = certHash
      // this.$store.state.signalR.signalRIdentity = identity
      this.setSignalRStatus()
    })
  },
  methods: {
    async start() {
      try {
        await this.connection.start()
        this.appRunning = true
        this.getStatusFromServer()
      } catch (err) {
        setTimeout(() => this.start(), 5000)
      }
    },
    async getStatusFromServer() {
      try {
        await this.connection.invoke('getStatus')
      } catch (err) {
        this.$store.dispatch('snackbar/openError', err)
      }
    },

    ...mapActions('voter', ['performFetchAllVoterForms', 'performSubmitVote']),
    utf8_to_b64(str) {
      return window.btoa(unescape(encodeURIComponent(str)))
    },

    b64_to_utf8(str) {
      return decodeURIComponent(escape(window.atob(str)))
    },
    submitForm() {
      const toSend = {
        votingForm: this.selectedForm.name,
        answers: this.userAnwers,
        time: new Date(),
        votingFormId: this.$route.params.id
      }
      this.connection.invoke(
        'SignMessage',
        utf8_to_b64(JSON.stringify(toSend)),
        'VoterAnswerEn'
      )
      this.$store.dispatch(
        'snackbar/openSuccess',
        'Please open QesadilaAuth desktop application, and sign the form'
      )
    },
    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    },
    async fetchList() {
      const data = await this.performFetchAllVoterForms()
      this.allLists = data
      this.setSignalRStatus()
    },
    setSignalRStatus() {
      let isOk = false
      switch (this.$store.state.signalR.signalRStatus) {
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
                  this.$store.state.signalR.signalRCertHash
                )
              ) {
                this.signalStatusText =
                  'You are signed in as valid voter in QesadilaAuth: ' +
                  this.$store.state.signalR.signalRIdentity
                this.signalStatusType = 'info'
                isOk = true
              } else {
                console.log(
                  'this.selectedForm.listOfValidCertificatesForSignature, hash',
                  this.selectedForm.listOfValidCertificatesForSignature,
                  this.$store.state.signalR.signalRCertHash
                )
              }
            }
          } else {
            console.log('this.selectedForm', this.selectedForm)
          }
          if (!isOk) {
            this.signalStatusText =
              'You are not signed in as valid voter in QesadilaAuth: ' +
              this.$store.state.signalR.signalRIdentity
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
