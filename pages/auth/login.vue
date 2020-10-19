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
            <v-toolbar-title>{{ $t('general.signInForm') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <h1>
                  Prihláste sa so slovenským občianskym preukazom
                </h1>
              </v-col>
              <v-col cols="6">
                <h1>Prihláste sa s QesadilaAuth</h1>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <p>
                  <img
                    alt="Slovak identity"
                    src="/images/sk-flag.svg"
                    class="float-left rounded"
                    style="height:100px; border: 1px solid #333; margin-right:1em"
                  />
                  Použite občiansky preukaz, doklad o pobyte alebo alternatívny
                  autentifikátor.
                </p>
              </v-col>
              <v-col cols="6">
                <p>
                  <img
                    alt="Slovak identity"
                    src="/favicon.png"
                    class="float-left rounded"
                    style="height:100px; border: 1px solid #333;
                  margin-right:1em"
                  />
                  Qesadila Auth umožňuje prihlásenie ľubovoľnou crypto
                  identitou. PGP, alebo X509 RSA, X509 EC certifikátom alebo
                  certifikátom uloženým v PKCS11 zariadení.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn color="primary" @click="slovakIdentityClick">{{
                  $t('Pokračovať s občianskym preukazom')
                }}</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn color="primary" @click="handleSubmit">{{
                  $t('Pokračovať s QesadilaAuth')
                }}</v-btn>
              </v-col>
            </v-row>
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
      username: '',
      password: ''
    }
  },
  mounted() {
    if (this.$route && this.$route.query && this.$route.query.token) {
      this.processToken({ token: this.$route.query.token })
      this.$router.push('/dashboard')
    }
  },
  methods: {
    ...mapActions('auth', ['performLogin', 'processToken']),
    handleSubmit() {
      window.location = 'qesadilaauth://login'
    },
    slovakIdentityClick() {
      window.location = 'https://asc-prod.qesadila.com:9443/init'
    }
  }
}
</script>

<style></style>
