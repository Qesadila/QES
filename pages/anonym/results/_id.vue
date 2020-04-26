<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card v-if="selectedForm" width="100%" class="pa-5">
      <h1>Voting result</h1>
      <h2>Votes by voter</h2>
      <v-data-table
        :headers="voterTableHeaders"
        :items="selectedForm.votersChoices"
        :items-per-page="-1"
        :hide-default-footer="true"
        class="elevation-1"
        :loading="isLoading"
      >
        <template v-slot:item.open_from="{ item }">{{
          formatDate(item.openFrom)
        }}</template>

        <template v-slot:item.open_until="{ item }">{{
          formatDate(item.openUntil)
        }}</template>

        <template v-slot:item.actions="{ item }">
          <template>
            <v-btn
              color="secondary"
              :to="`/anonym/results/${item.votingFormId}`"
              >{{ $t('anonym.showResults') }}</v-btn
            >
          </template>
        </template>
      </v-data-table>
    </v-card>

    <div v-else>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </div>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      userAnwers: {},
      selectedForm: {},
      voterTableHeaders: [
        {
          text: 'Voter name',
          sortable: true,
          value: 'voter.name'
        },
        {
          text: 'Answers',
          sortable: true,
          value: 'votingFormItemOption.option'
        }
      ]
    }
  },
  mounted() {
    this.fetchVotingForm()
  },
  methods: {
    ...mapActions('voterForm', ['getSinglePublicVoting']),
    async fetchVotingForm() {
      const votingFormId = this.$route.params.id
      const data = await this.getSinglePublicVoting({ votingFormId })
      this.selectedForm = data
    }
  }
}
</script>
