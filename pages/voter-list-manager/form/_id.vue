<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card v-if="selectedList" width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          {{ $t('voterListManager.voters') }}
        </div>

        <v-divider class="mb-10"></v-divider>

        <div class="px-5">
          <v-text-field
            v-model="selectedList.voterListName"
            disabled
            :label="$t('voterListManager.labelListName')"
            outlined=""
          />
          <v-switch
            v-model="selectedList.isPublished"
            disabled
            :label="$t('voterListManager.labelIsPublic')"
          />
        </div>

        <div class="pa-5">
          <h2 class="mb-3 text-center">{{ $t('voterListManager.voters') }}</h2>
          <v-data-table
            :headers="headers"
            :items="selectedList.voters"
            :items-per-page="-1"
            :hide-default-footer="true"
            class="elevation-1"
          >
            <template v-slot:item.gdprConsentFrom="{ item }">
              <v-icon>{{
                item.gdprConsentFrom ? 'mdi-check' : 'mdi-close'
              }}</v-icon>
            </template>
          </v-data-table>
        </div>
      </form>
    </v-card>

    <div v-else>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </div>
  </v-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'authenticated',
  data() {
    return {
      headers: [
        {
          text: this.$t('voterListManager.votersTable.voterName'),
          sortable: false,
          value: 'name'
        },
        {
          text: this.$t('voterListManager.votersTable.voterQes'),
          sortable: false,
          value: 'gdprConsentFrom'
        }
      ],
      allLists: []
    }
  },
  computed: {
    selectedList() {
      return (
        this.allLists &&
        this.allLists.find((item) => item.voterListId === this.$route.params.id)
      )
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    ...mapActions('listManager', ['performFetchList']),
    async fetchList() {
      const data = await this.performFetchList()
      this.allLists = data
    }
  }
}
</script>
