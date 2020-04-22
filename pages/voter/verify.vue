<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <div class="mr-2">
              <v-img
                :src="require('../../static/favicon.png')"
                height="48"
                width="48"
                contain
              ></v-img>
            </div>
            <v-toolbar-title>{{
              $t('general.verifyVoterMail')
            }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="token"
                label="Token"
                name="token"
                prepend-icon="mdi-account"
                type="email"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-col class="text-right">
              <v-btn class="primary" @click="handleSubmit">{{
                $t('general.verifyEmailAction')
              }}</v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.getToken()
  },
  methods: {
    ...mapActions('voter', ['performVerifyVoter']),
    async handleSubmit() {
      await this.performVerifyVoter({
        token: this.token
      })
    },
    getToken() {
      if (this.$route.query.token) {
        this.token = this.$route.query.token
      }
    }
  }
}
</script>

<style></style>
