<template>
  <v-card>
    <v-card-title>
      List of the Votings
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="-1"
        :hide-default-footer="true"
        class="elevation-1"
      >
        <template v-slot:item.status="{ item }">
          <v-chip :color="item.voted ? 'green' : 'red'" dark>{{
            item.voted ? 'You voted already' : `You didn't voted yet!`
          }}</v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <template v-if="item.voted">
            <v-btn color="secondary" :to="`/voter/form/${item.id}`"
              >Show results</v-btn
            >
          </template>
          <template v-else>
            <v-btn color="primary" :to="`/voter/form/${item.id}`">Vote</v-btn>
          </template>
        </template>
      </v-data-table></v-card-text
    >
  </v-card>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
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
          value: 'voter_list'
        },
        {
          text: 'Status',
          sortable: false,
          value: 'status'
        },
        {
          text: 'Action',
          sortable: false,
          value: 'actions'
        }
      ],
      desserts: [
        {
          id: 1,
          name: 'Donation distribution for schools',
          open_from: '2020-04-01 12:00',
          open_until: '2020-04-01 20:00',
          voter_list: 'City representatives',
          voted: true
        },
        {
          id: 2,
          name: 'Public services',
          open_from: '2020-04-01 12:00',
          open_until: '2021-04-01 20:00',
          voter_list: 'Citizens',
          voted: false
        }
      ]
    }
  }
}
</script>
