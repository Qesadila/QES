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
              {{ $store.state.auth.user.name }}
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
      <span>&copy; {{ new Date().getFullYear() }} Srdcom doma o.z.</span>
    </v-footer>
    <snackbar-component></snackbar-component>
  </v-app>
</template>

<script>
import {
  anonymousRoutes,
  voterRoutes,
  votingListManagerRoutes,
  votingFormManagerRoutes
} from '../code/constants/sideMenuItems'
import SnackbarComponent from '~/components/SnackbarComponent'

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
  },
  methods: {
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
