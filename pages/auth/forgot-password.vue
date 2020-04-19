<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>{{ $t('general.resetPassword') }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          label="E-mail"
          name="email"
          prepend-icon="mdi-account"
          type="text"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="handleSubmit">{{
        $t('general.sendResetLink')
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
      email: ''
    }
  },
  methods: {
    ...mapActions('auth', ['performGetResetPasswordLink']),
    async handleSubmit() {
      await this.performGetResetPasswordLink({
        email: this.email
      })
    }
  }
}
</script>

<style></style>
