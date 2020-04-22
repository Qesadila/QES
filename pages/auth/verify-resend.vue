<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
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
            <v-toolbar-title>{{ $t('general.verifyMail') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="E-mail"
                name="email"
                prepend-icon="mdi-email"
                type="email"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text to="/auth/verify-email">{{
              $t('general.backToVerification')
            }}</v-btn>
            <v-spacer />
            <v-btn color="primary" @click="handleSubmit">{{
              $t('general.resendToken')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      email: ''
    }
  },

  methods: {
    ...mapActions('auth', ['performResendToken']),
    async handleSubmit() {
      await this.performResendToken({
        email: this.email
      })
    }
  }
}
</script>

<style></style>
