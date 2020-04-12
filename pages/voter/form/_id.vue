<template>
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
</template>
<script>
import { mapActions } from 'vuex'
import { HubConnectionBuilder } from '@microsoft/signalr'

export default {
  middleware: 'authenticated',
  data() {
    return {
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

    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:58080/hubs/signin')
      .build()

    this.connection
      .start()
      .then(() => {
        this.appRunning = true
      })
      .catch((e) => {
        console.log(e)
      })

    this.connection.on('Connecting', () => {
      alert('connecting')
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
      console.log("on('Logout)", questionId, score)
      this.authenticated = 'Unauthenticated'
      // questionHub.$emit('score-changed', { questionId, score })
    })
  },
  methods: {
    ...mapActions('formManager', ['performFetchALlForms']),
    submitForm() {
      console.log('Form submitted! ->', this.userAnwers)
      const toSend = {
        votingForm: this.selectedForm.name,
        answers: this.userAnwers,
        time: new Date(),
        votingFormId: this.$route.params.id
      }
      this.connection.invoke('SignMessage', btoa(JSON.stringify(toSend)))
      this.waitingForSign = true
    },
    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    },
    async fetchList() {
      const data = await this.performFetchALlForms()
      this.allLists = data
    }
  }
}
</script>
