<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card v-if="selectedForm" width="100%" class="pa-5">
      <h1>TBA: RESULTS WILL BE HERE</h1>
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
    ...mapActions('voter', ['performFetchAllVoterForms']),
    submitForm() {
      console.log('Form submitted! ->', this.userAnwers)
    },
    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    },
    async fetchList() {
      const data = await this.performFetchAllVoterForms()
      this.allLists = data
    }
  }
}
</script>
