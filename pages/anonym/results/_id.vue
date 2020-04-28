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
      <h2>Votes by question</h2>
      <div
        v-for="questionItem in selectedForm.votingFormItems"
        v-bind:key="questionItem"
      >
        <v-simple-table
          ><template v-slot:default>
            <tbody>
              <tr>
                <th>Question</th>
                <td>
                  {{ questionItem.question }}
                </td>
              </tr>
              <tr>
                <th>Number of positive answers</th>
                <td>
                  {{ questionItem.numberOfPositiveAnswers }}
                </td>
              </tr>
              <tr>
                <th>Number of negative answers</th>
                <td>
                  {{ questionItem.numberOfNegativeAnswers }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div
          v-for="answerItem in questionItem.votingFormItemResults"
          v-bind:key="answerItem"
        >
          <h3>{{ answerItem.question }}</h3>
        </div>
        <v-data-table
          v-if="questionItem.votingFormItemResult"
          :headers="answersTableHeaders"
          :items="questionItem.votingFormItemResult.votingFormItemOptionResults"
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
      </div>
    </v-card>

    <div v-else>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </div>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
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
      ],
      answersTableHeaders: [
        {
          text: 'Option',
          sortable: true,
          value: 'option'
        },
        {
          text: 'Sum of positive answers',
          sortable: true,
          value: 'sumOfPositiveAnswers'
        },
        {
          text: 'Sum of negative answers',
          sortable: true,
          value: 'sumOfNegativeAnswers'
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
