<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card v-if="selectedList" width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          Voter List Detail
        </div>

        <v-divider class="mb-10"></v-divider>

        <div class="px-5">
          <v-text-field
            v-model="selectedList.voterListName"
            disabled
            label="List name"
            outlined=""
          />
          <v-switch
            v-model="selectedList.isPublished"
            disabled
            label="Is published"
          />
        </div>

        <div class="pa-5">
          <h2 class="mb-3 text-center">Voters</h2>
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
          text: 'Name',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Qualified electronic signature',
          sortable: false,
          value: 'gdprConsentFrom'
        }
      ],
      allLists: []
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
  },
  computed: {
    selectedList() {
      return (
        this.allLists &&
        this.allLists.find((item) => item.voterListId === this.$route.params.id)
      )
    }
  }
}
</script>
