<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <div class="d-flex flex-row justify-end mr-5 mt-5">
        <v-btn icon to="/voting-form-manager"><v-icon>mdi-close</v-icon></v-btn>
      </div>
      <div class="d-flex flex-row justify-center py-5 display-1">
        {{ $t('votingFormManager.createFormTitleText') }}
      </div>
      <div class="pa-12">
        <v-divider class="mb-5"></v-divider>

        <div>{{ $t('votingFormManager.formName') }}</div>
        <v-text-field
          v-model="createdForm.name"
          outlined
          :placeholder="$t('votingFormManager.placeholderFormName')"
        ></v-text-field>

        <div>{{ $t('votingFormManager.endingType') }}</div>
        <v-select
          v-model="createdForm.endingType"
          :items="endingTypes"
          :item-text="selectText"
          :item-value="selectValue"
        >
        </v-select>

        <div>{{ $t('votingFormManager.formOpenUntil') }}</div>
        <VueCtkDateTimePicker
          v-model="createdForm.openUntil"
          format="YYYY-MM-DDTHH:mm:ssZ"
        >
        </VueCtkDateTimePicker>

        <v-divider class="mb-5"></v-divider>
        <div>{{ $t('votingFormManager.voterListId') }}</div>
        <v-select
          v-model="createdForm.voterListId"
          outlined
          :items="voterLists"
          :placeholder="$t('votingFormManager.placeholderVoterListId')"
          item-value="voterListId"
          item-text="voterListName"
        ></v-select>

        <v-divider class="mb-5"></v-divider>

        <div class="display-1 mb-10">
          {{ $t('votingFormManager.questions') }}
        </div>
        <div v-for="questionId in questionIds" :key="questionId" class="mb-12">
          <div class="d-flex flex-row">
            <v-card width="100%" elevation="3">
              <add-question-modal
                :question-id="questionId"
                :question-order="questionIdToOrder(questionId)"
                @save-question="saveQuestion"
                @remove-question="removeQuestion"
              />
            </v-card>
          </div>
        </div>
      </div>
      <v-divider></v-divider>

      <div
        class="d-flex flex-row justify-space-between pa-5 form-generator-background"
      >
        <v-btn text color="primary" x-large @click="addQuestion">
          {{ $t('votingFormManager.addNewQuestion') }}</v-btn
        >

        <v-btn v-if="formIsValid" color="primary" x-large @click="saveForm">
          <span class="white--text d-flex align-center">
            <v-icon left>mdi-check</v-icon>
            {{ $t('votingFormManager.saveForm') }}
          </span></v-btn
        >
        <div v-if="formValidationError" class="badge badge-error">
          {{ formValidationError }}
        </div>
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
      questionIds: {},
      questionIter: 0,
      createdForm: {
        name: '',
        endingType: 'AutoClosingWhenAllHasVoted',
        openUntil: null,
        voterListId: '',
        votingFormItems: []
      },
      voterLists: [],
      formIsValid: false,
      formValidationError: 'Please fill in the form',
      endingTypes: [
        {
          value: 'AutoClosingWhenAllHasVoted',
          name: this.$t('votingFormManager.AutoClosingWhenAllHasVoted')
        },
        {
          value: 'TimeoutOnly',
          name: this.$t('votingFormManager.TimeoutOnly')
        },
        {
          value: 'VoterManagerCanCloseAnyTime',
          name: this.$t('votingFormManager.VoterManagerCanCloseAnyTime')
        },
        {
          value: 'VoterManagerCanCloseIfAllHasVoted',
          name: this.$t('votingFormManager.VoterManagerCanCloseIfAllHasVoted')
        }
      ]
    }
  },
  mounted() {
    this.fetchVoterLists()
    this.addQuestion()
  },
  methods: {
    ...mapActions('formManager', ['performFetchList']),
    selectText: (item) => item.name,
    selectValue: (item) => item.value,
    saveQuestion(id, questionData) {
      this.$set(this.createdForm.votingFormItems, id, questionData)
      this.validateForm()
    },
    removeQuestion(id) {
      this.$delete(this.questionIds, id)
      this.$delete(this.createdForm.votingFormItems, id)
    },
    addQuestion() {
      this.questionIter++
      this.$set(
        this.questionIds,
        this.questionIter.toString(),
        this.questionIter.toString()
      )
    },
    questionIdToOrder(id) {
      let i = 0
      for (const index in this.questionIds) {
        i++
        if (index.toString() === id.toString()) return i
      }
      return -1
    },
    validateForm() {
      // check if form name was filled in
      if (this.createdForm.name === '') {
        this.formValidationError = 'Please fill in form name'
        this.formIsValid = false
        return
      }
      // check if all questions has the text filled in
      for (const index in this.createdForm.votingFormItems) {
        if (this.createdForm.votingFormItems[index].question === '') {
          this.formValidationError =
            'Each question must have text of the question filled in'
          this.formIsValid = false
          return
        }
      }
      // check if any question has the same question text
      const names = []
      for (const index in this.createdForm.votingFormItems) {
        if (names.includes(this.createdForm.votingFormItems[index].question)) {
          this.formValidationError =
            'Each question must have unique text of the question'
          this.formIsValid = false
          return
        }
        names.push(this.createdForm.votingFormItems[index].question)
      }

      // check if any question has the same question text
      for (const index in this.createdForm.votingFormItems) {
        const optionNames = []
        for (const questionIndex in this.createdForm.votingFormItems[index]
          .votingFormItemOptions) {
          if (
            this.createdForm.votingFormItems[index].votingFormItemOptions[
              questionIndex
            ].option === ''
          )
            continue
          if (
            optionNames.includes(
              this.createdForm.votingFormItems[index].votingFormItemOptions[
                questionIndex
              ].option
            )
          ) {
            this.formValidationError =
              'Each option in question must have unique text'
            this.formIsValid = false
            return
          }
          optionNames.push(
            this.createdForm.votingFormItems[index].votingFormItemOptions[
              questionIndex
            ].option
          )
        }
        if (optionNames.length === 0) {
          this.formValidationError =
            'Each question must have at least one possible answer filled in'
          this.formIsValid = false
          return
        }
      }
      this.formValidationError = ''
      this.formIsValid = true
    },
    async saveForm() {
      this.validateForm()
      if (!this.formIsValid) {
        return
      }

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
