<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      justify="between"
      color="primary"
      dark
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="mx-2">
        <v-img
          :src="require('../static/favicon.png')"
          height="48"
          width="48"
          contain
        ></v-img>
      </div>

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-select
        v-model="selectedRole"
        style="max-width: 300px; margin-left: 30px"
        flat
        hide-details
        :items="roles"
        :label="$t('general.role')"
        @change="handleRoleChange"
      ></v-select>

      <v-select
        class="mr-5"
        :value="$i18n.locale"
        style="max-width: 100px; margin-left: 30px"
        flat
        hide-details
        :items="locales"
        :label="$t('general.language')"
        @change="handleChange"
      ></v-select>

      <div v-if="$store.state.auth.auth">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <span v-if="$store.state.auth.authJWT">
                <v-img
                  :src="require('../static/qes.png')"
                  height="30"
                  width="30"
                  contain
                ></v-img>
              </span>
              <span v-else>
                {{ $store.state.auth.user.name }}
              </span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$store.dispatch('auth/performLogout')">
              <v-list-item-title>{{ $t('general.logout') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn text to="/auth/login">
          {{ $t('general.signIn') }}
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <v-container fluid="">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app class="d-flex flex-row justify-center">
      <span
        >&copy; {{ new Date().getFullYear() }} Srdcom doma o.z.
        <span v-if="this.$store.state.signalR.signalRIdentity">
          QesadilaAuth identity:
          {{ this.$store.state.signalR.signalRIdentity }}
        </span>
      </span>
    </v-footer>
    <snackbar-component></snackbar-component>
  </v-app>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import {
  anonymousRoutes,
  voterRoutes,
  votingListManagerRoutes,
  votingFormManagerRoutes
} from '../code/constants/sideMenuItems'
import SnackbarComponent from '~/components/SnackbarComponent'

const signalR = require('@microsoft/signalr')
const setSideMenuItems = (role) => {
  if (role === 'anonym') return anonymousRoutes
  if (role === 'voter') return voterRoutes
  if (role === 'voting-form-manager') return votingFormManagerRoutes
  if (role === 'voting-list-manager') return votingListManagerRoutes
}

export default {
  name: 'DefaultLayout',
  components: {
    SnackbarComponent
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      roles: [
        {
          text: 'Anonym',
          value: 'anonym'
        },
        {
          text: 'Voter',
          value: 'voter'
        },
        {
          text: 'Voting Form Manager',
          value: 'voting-form-manager'
        },
        {
          text: 'Voting List Manager',
          value: 'voting-list-manager'
        }
      ],
      items: anonymousRoutes,
      title: 'QUESADILA',
      selectedRole: 'anonym'
    }
  },
  computed: {
    menuItems() {
      return setSideMenuItems(this.selectedRole)
    },
    locales() {
      return this.$i18n.locales.map((l) => l.code)
    }
  },
  mounted() {
    this.roles.map((item) => {
      if (this.$route.path.search(item.value) !== -1) {
        this.selectedRole = item.value
      }
    })
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:58080/hubs/signin')
      .withAutomaticReconnect()
      .build()
    this.startSignalR()

    this.connection.onreconnecting((error) => {
      const status = 'reconnecting'
      const identity = ''
      const certHash = ''
      this.onStatusUpdate({ status, identity, certHash })
      this.setSignalRStatus()
      console.log(error)
    })
    this.connection.onreconnected((connectionId) => {
      this.getStatusFromServer()
      const status = 'reconnected'
      const identity = ''
      const certHash = ''
      this.onStatusUpdate({ status, identity, certHash })
      this.setSignalRStatus()
      console.log(connectionId)
    })
    this.connection.onclose((error) => {
      console.log(error)
      const status = 'disconnected'
      const identity = ''
      const certHash = ''
      this.onStatusUpdate({ status, identity, certHash })
    })
    this.connection.on('Connecting', () => {
      const status = 'connecting'
      const identity = ''
      const certHash = ''
      this.onStatusUpdate({ status, identity, certHash })
    })

    this.connection.on('Status', (status, identity, certHash) => {
      if (this.$store.state.auth.authJWT) {
        if (certHash !== this.$store.state.signalR.signalRCertHash) {
          this.performLogoutFromCertificate()
        }
      }
      this.onStatusUpdate({ status, identity, certHash })

      this.setSignalRStatus()
    })
    this.connection.on('Authenticate', (data) => {
      console.log('Authenticate', data)
      this.performLoginWithCertificate({ data })
    })
    this.connection.on('VoterAnswer', (data) => {
      const result = this.performSubmitVote({ data })
      if (result) {
        this.$store.dispatch(
          'snackbar/openSuccess',
          'Your votes was signed and counted!'
        )
        this.$router.push('/voter/submission')
      }
    })
  },
  methods: {
    ...mapMutations('signalR', ['onStatusUpdate', 'setSignalRStatus']),
    ...mapActions('voter', ['performSubmitVote']),
    ...mapActions('auth', [
      'performLoginWithCertificate',
      'performLogoutFromCertificate'
    ]),
    async startSignalR() {
      try {
        await this.connection.start()
        this.appRunning = true
        this.getStatusFromServer()
      } catch (err) {
        setTimeout(() => this.start(), 5000)
      }
    },
    async getStatusFromServer() {
      try {
        await this.connection.invoke('getStatus')
      } catch (err) {
        this.$store.dispatch('snackbar/openError', err)
      }
    },
    handleChange(lang) {
      this.$router.push(this.switchLocalePath(lang))
    },
    handleRoleChange(role) {
      this.$router.push(`/${role}`)
      this.selectedRole = role
    }
  }
}
</script>
