<template>
  <v-card>
    <div class="d-flex flex-row justify-space-between pt-5 px-5">
      <div class="display-1">{{ $t('voter.title') }}</div>
      <v-btn icon color="primary" x-large to="/voting-form-manager/form/create">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
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
        <template v-slot:item.published="{ item }">
          <v-chip
            :color="item.isPublished ? 'green' : ''"
            dark
            @click="handlePublish(item.id)"
            >{{ item.isPublished ? 'published' : `unpublished` }}</v-chip
          >
        </template>

        <template v-slot:item.open_from="{ item }">{{
          formatDate(item.openFrom)
        }}</template>

        <template v-slot:item.open_until="{ item }">{{
          formatDate(item.openUntil)
        }}</template>

        <template v-slot:item.actions="{ item }">
          <template v-if="isAfter(item.openUntil, currentDate)">
            <v-btn
              color="secondary"
              :to="`/voter/results/${item.votingFormId}`"
              >{{ $t('voter.showResults') }}</v-btn
            >
          </template>
          <template v-else>
            <v-btn color="primary" :to="`/voter/form/${item.votingFormId}`">{{
              $t('voter.vote')
            }}</v-btn>
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
          text: this.$t('voter.table.formListName'),
          sortable: false,
          value: 'name'
        },
        {
          text: this.$t('voter.table.openFrom'),
          sortable: false,
          value: 'open_from'
        },
        {
          text: this.$t('voter.table.openUntil'),
          sortable: false,
          value: 'open_until'
        },

        {
          text: this.$t('voter.table.voterList'),
          sortable: false,
          value: 'voterList.voterListName'
        },
        {
          text: this.$t('voter.table.actions'),
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
    ...mapActions('voter', ['performFetchAllVoterForms']),
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
      const data = await this.performFetchAllVoterForms()
      this.items = data
      this.isLoading = false
    }
  }
}
</script>
