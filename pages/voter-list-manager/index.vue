<template>
  <v-card>
    <div class="d-flex flex-row justify-space-between pt-5 px-5">
      <div class="display-1">
        {{ $t('voterListManager.title') }}
      </div>
      <v-btn icon color="primary" x-large to="/voter-list-manager/form/create">
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
            item.isPublished
              ? $t('voterListManager.published')
              : $t('voterListManager.unpublished')
          }}</v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn
            color="secondary"
            :to="`/voter-list-manager/form/${item.voterListId}`"
            >{{ $t('voterListManager.showDetails') }}</v-btn
          >
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
          text: this.$t('voterListManager.indexTable.voterListName'),
          sortable: true,
          value: 'voterListName'
        },
        {
          text: this.$t('voterListManager.indexTable.actions'),
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
    ...mapActions('listManager', ['performFetchPrivateInfo']),
    async fetchList() {
      this.isLoading = true
      const data = await this.performFetchPrivateInfo()
      this.items = data
      this.isLoading = false
    }
  }
}
</script>
