<template>
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
          v-model="token"
          label="Token"
          name="token"
          prepend-icon="mdi-account"
          type="email"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text to="/auth/login">{{ $t('general.acceptCheckbox') }}</v-btn>
      <v-btn text to="/auth/verify-resend">{{
        $t('general.resendToken')
      }}</v-btn>
      <v-spacer />
      <v-btn color="primary" @click="handleSubmit">{{
        $t('general.verifyEmailAction')
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'blank-centered',
  middleware: 'notAuthenticated',
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.getToken()
  },
  methods: {
    ...mapActions('auth', ['performVerifyEmail']),
    async handleSubmit() {
      await this.performVerifyEmail({
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
