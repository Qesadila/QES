<template>
  <v-card>
    <v-card-title>
      Voter Lists
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="-1"
        :hide-default-footer="true"
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
          value: 'name'
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
          value: 'actions'
        }
      ],
      desserts: [
        {
          name: 'Donation distribution for schools',
          registered_voters: 25,
          invitations_sent: 5
        },
        {
          name: 'Public services',
          registered_voters: 30,
          invitations_sent: 12
        }
      ]
    }
  }
}
</script>
