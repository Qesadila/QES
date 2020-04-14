<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          Create New Voter List
        </div>

        <v-divider class="mb-10"></v-divider>

        <div class="px-5">
          <v-text-field v-model="listName" label="List name" outlined="" />
          <v-switch v-model="isPublic" label="Is public" />
        </div>

        <div class="d-flex flex-row justify-center px-12 mb-6 body">
          <v-btn x-large color="primary" @click="addUsers">Continue</v-btn>
        </div>

        <div v-if="listId !== null" class="pa-5">
          <h2 class="mb-3 text-center">Voters</h2>
          <v-data-table
            :headers="headers"
            :items="voters"
            :items-per-page="-1"
            :hide-default-footer="true"
            class="elevation-1"
          >
          </v-data-table>

          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn color="red lighten-2" dark class="mt-5" v-on="on">
                Add voter
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Add voter
              </v-card-title>

              <v-card-text class="pt-5">
                <v-text-field
                  v-model="voter.email"
                  label="Voter email"
                  outlined
                />
                <v-switch
                  v-model="voter.isRegistered"
                  label="Voter submitted GDPR consent"
                />
                <v-file-input
                  v-if="!voter.isRegistered"
                  v-model="voter.file"
                  label="Sign file"
                  outlined
                />
                <v-switch
                  v-if="!voter.isRegistered"
                  v-model="voter.isQes"
                  label="Is QES"
                />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="createAndAttachUser">
                  Add Voter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </form>
    </v-card>
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
          text: 'Voter name',
          sortable: true,
          value: 'name'
        },
        {
          text: 'E-mail',
          sortable: true,
          value: 'email'
        },
        {
          text: 'Qualified electronic signature',
          sortable: true,
          value: 'file'
        },
        {
          text: 'Action',
          sortable: false,
          value: 'actions',
          width: 300
        }
      ],
      listName: '',
      listId: null,
      voters: [],
      dialog: false,
      isPublic: false,
      voter: {
        isRegistered: true,
        email: '',
        file: null,
        isQes: true
      }
    }
  },
  methods: {
    ...mapActions('listManager', [
      'performAddList',
      'performAssignVoterToList'
    ]),
    ...mapActions('voter', ['performAddVoter']),

    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    },
    async addUsers() {
      const response = await this.performAddList({
        name: this.listName,
        isPublic: this.isPublic
      })

      this.listId = response.voterListId
    },
    async createAndAttachUser() {
      if (!this.voter.isRegistered) {
        await this.performAddVoter({
          email: this.voter.email,
          file: this.voter.file,
          isQes: this.voter.isQes
        })
      }

      const isAdded = await this.performAssignVoterToList({
        userEmail: this.voter.email,
        voterListId: this.listId
      })

      if (isAdded) {
        let nameValue = '?'
        let qes = false
        if (isAdded.voter) {
          nameValue = isAdded.voter.name
          qes = isAdded.voter.isQes
        }
        this.voters.push({
          email: this.voter.email,
          name: nameValue,
          isQes: qes,
          id: isAdded.voterId
        })
      }

      this.voter.email = ''
      this.voter.file = null
      this.dialog = false
      this.voter.isQes = true
    }
  }
}
</script>
