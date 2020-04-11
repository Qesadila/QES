<template>
  <v-card>
    <div class="d-flex flex-row justify-space-between pt-5 px-5">
      <div class="display-1">Voter Lists</div>
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
            @click="handlePublish(item.id)"
            :color="item.isPublished ? 'green' : ''"
            dark
            >{{ item.isPublished ? 'published' : `unpublished` }}</v-chip
          >
        </template>

        <template v-slot:item.open_from="{ item }">{{
          formatDate(item.open_from)
        }}</template>

        <template v-slot:item.open_until="{ item }">{{
          formatDate(item.open_until)
        }}</template>

        <template v-slot:item.actions="{ item }">
          <template v-if="item.buttons">
            <v-btn color="secondary">Show results</v-btn>
          </template>
          <template v-else>
            <v-btn color="primary">Edit</v-btn>
          </template>
        </template>
      </v-data-table>
    </v-card-text>
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
          text: 'Published / Unpublished',
          sortable: false,
          value: 'published'
        },
        {
          text: 'Voter List',
          sortable: false,
          value: 'voter_list'
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
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('formManager', ['performFetchALlForms']),
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
      const data = await this.performFetchALlForms()
      this.items = data
      this.isLoading = false
    }
  }
}
</script>
