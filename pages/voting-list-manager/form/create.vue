<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          {{ $t('votingListManager.createNewVoterList') }}
        </div>

        <v-divider class="mb-10"></v-divider>

        <div class="px-5">
          <v-text-field
            v-model="listName"
            :label="$t('votingListManager.labelListName')"
            outlined=""
          />
          <v-switch
            v-model="isPublic"
            :label="$t('votingListManager.labelIsPublic')"
          />
        </div>

        <div class="d-flex flex-row justify-center px-12 mb-6 body">
          <v-btn x-large color="primary" @click="addUsers">{{
            $t('votingListManager.continue')
          }}</v-btn>
        </div>

        <div v-if="listId !== null" class="pa-5">
          <h2 class="mb-3 text-center">{{ $t('votingListManager.voters') }}</h2>
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
                {{ $t('votingListManager.addVoter') }}
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                {{ $t('votingListManager.addVoter') }}
              </v-card-title>

              <v-card-text class="pt-5">
                <v-text-field
                  v-model="voter.email"
                  :label="$t('votingListManager.labelVoterEmail')"
                  outlined
                />
                <v-switch
                  v-model="voter.isRegistered"
                  :label="$t('votingListManager.labelVoterSubmittedGDPR')"
                />
                <v-file-input
                  v-if="!voter.isRegistered"
                  v-model="voter.file"
                  :label="$t('votingListManager.labelSignFile')"
                  outlined
                />
                <v-switch
                  v-if="!voter.isRegistered"
                  v-model="voter.isQes"
                  :label="$t('votingListManager.labelIsQes')"
                />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="createAndAttachUser">
                  {{ $t('votingListManager.addVoter') }}
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
          text: this.$t('votingListManager.votersTable.voterName'),
          sortable: true,
          value: 'name'
        },
        {
          text: this.$t('votingListManager.votersTable.voterEmail'),
          sortable: true,
          value: 'email'
        },
        {
          text: this.$t('votingListManager.votersTable.voterQes'),
          sortable: true,
          value: 'file'
        },
        {
          text: this.$t('votingListManager.votersTable.actions'),
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
        if (this.voter.isQes !== undefined) {
          await this.performAddVoter({
            email: this.voter.email,
            file: this.voter.file,
            isQes: this.voter.isQes
          })
        } else {
          await this.performAddVoter({
            email: this.voter.email,
            file: this.voter.file,
            isQes: false
          })
        }
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
        }
        if (isAdded.voter.isQes !== undefined) {
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
