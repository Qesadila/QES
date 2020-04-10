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
          <v-switch label="Is published" v-model="isPublished" />
        </div>

        <div class="d-flex flex-row justify-center px-12 mb-6 body">
          <v-btn x-large color="primary" @click="addUsers">Continue</v-btn>
        </div>

        <div class="pa-5" v-if="listId !== null">
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
              <v-btn color="red lighten-2" dark v-on="on" class="mt-5">
                Add user
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Add user
              </v-card-title>

              <v-card-text class="pt-5">
                <v-text-field
                  v-model="user.email"
                  label="User email"
                  outlined
                />
                <v-file-input v-model="user.file" label="Sign file" outlined />
                <v-switch v-model="user.isQES" label="Is QES" />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="createAndAttachUser">
                  Add user
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
          text: 'E-mail',
          sortable: false,
          value: 'email'
        },
        {
          text: 'Signed Document',
          sortable: false,
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
      isPublished: false,
      user: {
        email: '',
        file: null,
        isQES: true
      }
    }
  },
  methods: {
    ...mapActions('listManager', ['performAddList']),
    ...mapActions('voter', ['performAddVoter']),

    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    },
    async addUsers() {
      const response = await this.performAddList({
        name: this.listName,
        isPublished: this.isPublished
      })

      console.log(response)

      this.listId = 10
    },
    async createAndAttachUser() {
      const response = await this.performAddVoter({
        email: this.user.email,
        file: this.user.file,
        isQES: this.user.isQES
      })

      if (response) {
        this.voters.push({
          email: this.user.email,
          file: this.user.file.name,
          isQES: this.user.isQES
        })
      }

      this.user.email = ''
      this.user.file = null
      this.dialog = false
      this.user.isQES = true
    }
  }
}
</script>
