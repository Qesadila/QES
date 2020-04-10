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
        <v-checkbox v-model="acceptGDPR" label="Accept GDPR"></v-checkbox>
        <v-checkbox
          v-model="acceptCommercial"
          label="Accept commercial messages"
        ></v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text to="/auth/login">Already have account?</v-btn>
      <v-spacer />
      <v-btn color="primary" @click="handleSubmit">Register</v-btn>
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
      name: '',
      password: '',
      passwordCheck: '',
      acceptGDPR: false,
      acceptCommercial: false
    }
  },
  methods: {
    ...mapActions('auth', ['performRegister']),
    handleSubmit() {
      this.performRegister({
        username: this.username,
        name: this.name,
        password: this.password,
        acceptGDPR: this.acceptGDPR,
        acceptCommercial: this.acceptCommercial,
        language: this.$i18n.locale
      })
    }
  }
}
</script>

<style></style>
