<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="username"
          label="E-mail"
          name="username"
          prepend-icon="mdi-email"
          type="email"
        />

        <v-text-field
          v-model="password"
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text to="/auth/register">Sign up</v-btn>
      <v-btn text to="/auth/forgot-password">Forgot password?</v-btn>
      <v-spacer />

      <v-btn color="primary" @click="handleSubmit">Sign in</v-btn>
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
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['performLogin']),
    async handleSubmit() {
      await this.performLogin({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style></style>
