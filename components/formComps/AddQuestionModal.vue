<template>
  <v-card width="100%" elevation="0">
    <div class="px-6 pt-6">Possible answers</div>
    <div v-for="answerNumber in numberOfanswers" :key="answerNumber">
      <possible-answer-row
        :answer-number="answerNumber"
        @answer-text-changed="saveAnswer($event, answerNumber)"
      />
    </div>

    <v-divider class=""></v-divider>
    <div
      class="d-flex flex-row justify-space-between pa-5 form-generator-background"
    >
      <v-btn text color="primary" @click="numberOfanswers++"
        ><v-icon>mdi-plus</v-icon>Add new possible answer</v-btn
      >
      <v-btn color="green" @click="saveQuestion()"
        ><span class="white--text d-flex align-center">
          <v-icon left>mdi-check</v-icon>Save question</span
        ></v-btn
      >
    </div>
  </v-card>
</template>
<script>
import PossibleAnswerRow from './PossibleAnswerRow.vue'
export default {
  components: {
    PossibleAnswerRow
  },
  data() {
    return {
      numberOfanswers: 2
    }
  },
  methods: {
    saveAnswer(value, number) {
      console.log(value, number)
    },
    saveQuestion() {
      const questionData = {}
      this.$emit('save-question', questionData)
    }
  }
}
</script>
