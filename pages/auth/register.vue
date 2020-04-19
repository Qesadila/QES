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
      <v-toolbar-title>{{ $('general.signUpForm') }}</v-toolbar-title>
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
          v-model="name"
          :label="$('general.labelName')"
          name="name"
          prepend-icon="mdi-account"
          type="email"
        />

        <v-text-field
          v-model="password"
          :label="$('general.labelPassword')"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
        <v-text-field
          v-model="passwordCheck"
          :label="$('general.labelPasswordAgain')"
          name="password_check"
          prepend-icon="mdi-lock"
          type="password"
        />
        <v-checkbox v-model="acceptGDPR">
          <template v-slot:label>
            {{ $('general.acceptCheckbox') }}
            <nuxt-link to="/terms-and-conditions" class="ml-1">GDPR</nuxt-link>
          </template>
        </v-checkbox>
        <v-checkbox
          v-model="acceptCommercial"
          :label="$('general.acceptComercialMessages')"
        ></v-checkbox>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text to="/auth/login">{{ $('general.signIn') }}</v-btn>
      <v-spacer />
      <v-btn color="primary" @click="handleSubmit">{{
        $('general.signUp')
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
