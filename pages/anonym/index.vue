<template>
  <v-card>
    <div class="d-flex flex-row justify-space-between pt-5 px-5">
      <div class="display-1">List of Public Votings</div>
    </div>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="items"
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
            <v-btn color="secondary" :to="`/voter/results/${item.votingFormId}`"
              >Show results</v-btn
            >
          </template>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { formatDate, isAfter } from '~/code/helpers/formatDate'

export default {
  middleware: 'authenticated',
  data() {
    return {
      formatDate,
      isAfter,
      headers: [
        {
          text: 'Form List Name',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Open From',
          sortable: false,
          value: 'open_from'
        },
        {
          text: 'Open Until',
          sortable: false,
          value: 'open_until'
        },

        {
          text: 'Voter List',
          sortable: false,
          value: 'voterListId'
        },
        {
          text: 'Action',
          sortable: false,
          value: 'actions',
          width: 300
        }
      ],
      items: [],
      isLoading: false
    }
  },
  computed: {
    currentDate() {
      const date = new Date()
      return date.toISOString()
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('public', ['performFetchAllPublicForms']),
    handlePublish(id) {
      const fakeItTillYouMakeIt = this.desserts.findIndex(
        (item) => item.id === id
      )

      this.desserts[fakeItTillYouMakeIt].isPublished = !this.desserts[
        fakeItTillYouMakeIt
      ].isPublished
    },
    async fetchList() {
      this.isLoading = true
      const data = await this.performFetchAllPublicForms()
      this.items = data.filter((item) =>
        isAfter(item.openUntil, this.currentDate)
      )
      this.isLoading = false
    }
  }
}
</script>
