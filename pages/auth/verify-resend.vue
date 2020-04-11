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
      <v-toolbar-title>Verify mail</v-toolbar-title>
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
      <v-btn text to="/auth/verify-email">Back to the verification</v-btn>
      <v-spacer />
      <v-btn color="primary" @click="handleSubmit">Resend</v-btn>
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
