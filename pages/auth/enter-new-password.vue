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
            <v-toolbar-title>{{
              $t('general.enterNewPasswordTitle')
            }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="password"
                :label="$t('general.labelPassword')"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-text-field
                v-model="passwordCheck"
                :label="$t('general.labelPasswordAgain')"
                name="password_check"
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-checkbox v-model="acceptGDPR">
                <template v-slot:label>
                  {{ $t('general.acceptCheckbox') }}
                  <nuxt-link to="/terms-and-conditions" class="ml-1"
                    >GDPR</nuxt-link
                  >
                </template>
              </v-checkbox>
              <v-checkbox
                v-model="acceptCommercial"
                :label="$t('general.acceptComercialMessages')"
              ></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text to="/auth/login">{{ $t('general.signIn') }}</v-btn>
            <v-spacer />
            <v-btn color="primary" @click="handleSubmit">{{
              $t('general.signUp')
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
