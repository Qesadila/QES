<template>
  <v-card>
    <div class="d-flex flex-row justify-space-between pt-5 px-5">
      <div class="display-1">{{ $t('votingFormManager.title') }}</div>
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
            :color="item.Public ? 'green' : ''"
            dark
            @click="handlePublish(item.id)"
            >{{ item.Public ? 'public' : `private` }}</v-chip
          >
        </template>

        <template v-slot:item.open_from="{ item }">{{
          formatDate(item.openFrom)
        }}</template>

        <template v-slot:item.open_until="{ item }">{{
          formatDate(item.openUntil)
        }}</template>

        <template v-slot:item.actions="{ item }">
          <template v-if="item.buttons">
            <v-btn color="secondary">{{
              $t('votingFormManager.showResults')
            }}</v-btn>
          </template>
          <template v-else>
            <v-btn color="primary">{{ $t('votingFormManager.edit') }}</v-btn>
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
          text: this.$t('votingFormManager.table.formListName'),
          sortable: false,
          value: 'name'
        },
        {
          text: this.$t('votingFormManager.table.openFrom'),
          sortable: false,
          value: 'open_from'
        },
        {
          text: this.$t('votingFormManager.table.openUntil'),
          sortable: false,
          value: 'open_until'
        },
        {
          text: this.$t('votingFormManager.table.isPublic'),
          sortable: false,
          value: 'isPublic'
        },
        {
          text: this.$t('votingFormManager.table.voterList'),
          sortable: false,
          value: 'voterListId'
        },
        {
          text: this.$t('votingFormManager.table.actions'),
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
    ...mapActions('formManager', ['performFetchAllManagerForms']),
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
      const data = await this.performFetchAllManagerForms()
      this.items = data
      this.isLoading = false
    }
  }
}
</script>
