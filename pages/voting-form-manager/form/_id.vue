<template>
  <div>
    <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
      <v-card v-if="selectedForm" width="100%">
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
                <tr>
                  <th>All voters has voted</th>
                  <td>
                    {{ allVotersHasVoted }}
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
              <v-radio-group>
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
            <v-btn x-large color="primary" @click="endVoting">{{
              $t('votingFormManager.stopVoting')
            }}</v-btn>
          </div>
        </form>
      </v-card>

      <div v-else>
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </div>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'authenticated',
  data() {
    return {
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
    },
    allVotersHasVoted() {
      if (this.selectedForm.allVotersHasVoted) return this.$t('general.yes')
      return this.$t('general.no')
    }
  },

  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('formManager', ['stopVoting']),
    ...mapActions('voter', ['performFetchAllVoterForms']),
    endVoting() {
      const votingFormId = this.$route.params.id
      this.stopVoting({ votingFormId })
    },
    async fetchList() {
      const data = await this.performFetchAllVoterForms()
      this.allLists = data
    }
  }
}
</script>
