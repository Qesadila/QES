<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Registration form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="username"
          label="Email"
          name="username"
          prepend-icon="mdi-account"
          type="email"
        />

        <v-text-field
          v-model="name"
          label="Name"
          name="name"
          prepend-icon="mdi-account"
          type="email"
        />

        <v-text-field
          v-model="password"
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
        <v-text-field
          v-model="passwordCheck"
          label="Password check"
          name="password_check"
          prepend-icon="mdi-lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="handleSubmit">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'blank-centered',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['performLogin']),
    handleSubmit() {
      this.performLogin({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style></style>
