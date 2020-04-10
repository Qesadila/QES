<template>
  <v-card>
    <div class="d-flex flex-row justify-space-between pt-5 px-5">
      <div class="display-1">Voter Lists</div>
      <v-btn icon color="primary" x-large to="/voting-list-manager/form/create">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="-1"
        :loading="isLoading"
        class="elevation-1"
      >
        <template v-slot:item.published="{ item }">
          <v-chip :color="item.isPublished ? 'green' : ''" dark>{{
            item.isPublished ? 'published' : `unpublished`
          }}</v-chip>
        </template>

        <template v-slot:item.actions>
          <v-btn color="secondary">Show details</v-btn>
          <v-btn color="error">Delete</v-btn>
        </template>
      </v-data-table></v-card-text
    >
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { formatDate } from '~/code/helpers/formatDate'

export default {
  middleware: 'authenticated',
  data() {
    return {
      formatDate,
      headers: [
        {
          text: 'Form List Name',
          sortable: false,
          value: 'voterListName'
        },
        {
          text: 'Registered Voters',
          sortable: false,
          value: 'registered_voters'
        },
        {
          text: 'Invitations sent',
          sortable: false,
          value: 'invitations_sent'
        },
        {
          text: 'Action',
          sortable: false,
          align: 'right',
          value: 'actions'
        }
      ],
      items: [],
      isLoading: false
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('listManager', ['performFetchList']),
    async fetchList() {
      this.isLoading = true
      const data = await this.performFetchList()
      this.items = data
      this.isLoading = false
    }
  }
}
</script>
