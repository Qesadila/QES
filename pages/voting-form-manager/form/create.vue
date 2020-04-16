<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <div class="d-flex flex-row justify-end mr-5 mt-5">
        <v-btn icon to="/voting-form-manager"><v-icon>mdi-close</v-icon></v-btn>
      </div>
      <div class="d-flex flex-row justify-center py-5 display-1">
        Hello you can create your voting form here!
      </div>
      <div class="pa-12">
        <v-divider class="mb-5"></v-divider>

        <div>Name of the voting form</div>
        <v-text-field
          v-model="createdForm.name"
          outlined
          placeholder="Provide name of the voting form"
        ></v-text-field>

        <div>Form open until</div>
        <VueCtkDateTimePicker v-model="createdForm.openUntil">
        </VueCtkDateTimePicker>

        <v-divider class="mb-5"></v-divider>
        <div>Voter list ID</div>
        <v-select
          v-model="createdForm.voterListId"
          outlined
          :items="voterLists"
          placeholder="Select voter list"
          item-value="voterListId"
          item-text="voterListName"
        ></v-select>

        <v-divider class="mb-5"></v-divider>

        <div class="display-1 mb-10">Questions:</div>
        <div
          v-for="questionNumber in numberOfQuestions"
          :key="questionNumber"
          class="mb-12"
        >
          <div class="d-flex flex-row">
            <v-card width="100%" elevation="3">
              <add-question-modal
                :question-number="questionNumber - 1"
                @save-question="saveQuestion"
              />
            </v-card>

            <!-- <v-divider class="mb-5"></v-divider>

            Delete button for later use

            <v-btn
              color="red"
              small
              class="ml-12 mt-5"
              width="48"
              height="48"
              @click="deleteQuestion(questionNumber)"
            >
              <v-icon color="white">mdi-close</v-icon>
            </v-btn> -->
          </div>
        </div>
      </div>
      <v-divider></v-divider>

      <div
        class="d-flex flex-row justify-space-between pa-5 form-generator-background"
      >
        <v-btn color="primary" x-large @click="numberOfQuestions++"
          >Add new question</v-btn
        >

        <v-btn color="green" x-large @click="saveForm">
          <span class="white--text d-flex align-center">
            <v-icon left>mdi-check</v-icon>Save form</span
          ></v-btn
        >
      </div>
    </v-card>
  </v-row>
</template>
<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import { mapActions } from 'vuex'
import { MINIMUM_NUMBER_OF_QUESTIONS } from '../../../code/constants/createNewFormSettings'
import AddQuestionModal from '../../../components/formComps/AddQuestionModal.vue'

export default {
  middleware: 'authenticated',
  components: {
    AddQuestionModal,
    VueCtkDateTimePicker
  },
  data() {
    return {
      numberOfQuestions: MINIMUM_NUMBER_OF_QUESTIONS, // 1
      createdForm: {
        name: '',
        openUntil: null,
        voterListId: '',
        votingFormItems: []
      },
      voterLists: []
    }
  },
  mounted() {
    this.fetchVoterLists()
  },
  methods: {
    ...mapActions('listManager', ['performFetchList']),
    saveQuestion(questionData) {
      console.log('Question ID saved ->', questionData)
      this.createdForm.votingFormItems.push(questionData)
    },
    async saveForm() {
      console.log('Form saved ->', this.createdForm)
      console.log('String ->', JSON.stringify(this.createdForm))

      const fd = new FormData()

      const stringified = JSON.stringify(this.createdForm)

      fd.append('msg', stringified)

      await this.$axios
        .put('v1/Voting/CreateVotingForm', fd)
        .then((response) => {
          this.$store.dispatch('snackbar/openSuccess', 'Successfuly created!')
          this.$router.push('/voting-form-manager')
        })
    },
    async fetchVoterLists() {
      const resp = await this.performFetchList()

      this.voterLists = resp
    }
  }
}
</script>
<style lang="scss">
.form-generator-background {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
