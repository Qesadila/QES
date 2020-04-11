<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card v-if="selectedForm" width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          {{ selectedForm.title }}
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
              @change="handleUserAnswerChange(question.id, $event)"
            >
              <v-radio
                v-for="option in question.votingFormItemOptions"
                :key="option.votingFormItemOptionId"
                :label="option.option"
                :value="option.votingFormItemOptionId"
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
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'authenticated',
  data() {
    return {
      userAnwers: {},
      allLists: []
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
  },
  methods: {
    ...mapActions('formManager', ['performFetchALlForms']),
    submitForm() {
      console.log('Form submitted! ->', this.userAnwers)
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
