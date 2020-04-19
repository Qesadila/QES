<template>
  <v-card width="100%" elevation="0">
    <div class="pa-6">
      <div class="mb-5 font-weight-bold">
        {{ `${questionNumber + 1}. ${$t('votingFormManager.questionText')}` }}
      </div>
      <v-text-field
        v-model="questionData.question"
        outlined
        hide-details
      ></v-text-field>
    </div>
    <div class="px-6 pt-6">{{ $t('votingFormManager.possibleAnswers') }}</div>
    <div v-for="optionNumber in numberOfOptions" :key="optionNumber">
      <possible-answer-row
        :answer-number="optionNumber"
        @answer-text-changed="saveOption(optionNumber, $event)"
      />
    </div>

    <v-divider class=""></v-divider>
    <div
      class="d-flex flex-row justify-space-between pa-5 form-generator-background"
    >
      <v-btn text color="primary" @click="numberOfOptions++"
        ><v-icon>mdi-plus</v-icon
        >{{ $t('votingFormManager.addNewPossibleAnswer') }}</v-btn
      >
      <v-btn color="green" @click="saveQuestion"
        ><span class="white--text d-flex align-center">
          <v-icon left>mdi-check</v-icon
          >{{ $t('votingFormManager.saveQuestion') }}</span
        ></v-btn
      >
    </div>
  </v-card>
</template>
<script>
import { MINIMUM_NUMBER_OF_ANSWERS } from '../../code/constants/createNewFormSettings'
import PossibleAnswerRow from './PossibleAnswerRow.vue'

export default {
  components: {
    PossibleAnswerRow
  },
  props: {
    questionNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      numberOfOptions: MINIMUM_NUMBER_OF_ANSWERS, // 2
      questionData: {
        question: '',
        order: this.questionNumber + 1,
        votingFormItemOptions: [
          {
            option: '',
            order: 1
          },
          {
            option: '',
            order: 2
          }
        ]
      }
    }
  },
  methods: {
    saveOption(optionIndex, optionText) {
      if (optionIndex - 1 > this.questionData.votingFormItemOptions.length) {
        this.questionData.votingFormItemOptions.push({})
      }

      this.questionData.votingFormItemOptions[optionIndex - 1] = {
        option: optionText,
        order: optionIndex
      }
    },
    saveQuestion() {
      this.$emit('save-question', this.questionData)
    }
  }
}
</script>
