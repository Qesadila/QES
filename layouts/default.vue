<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
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

      <v-toolbar-title v-text="title" />
      <v-select
        v-model="selectedRole"
        style="max-width: 300px; margin-left: 30px"
        flat
        hide-details
        :items="roles"
        label="Role"
        @change="handleRoleChange"
      ></v-select>

      <v-spacer />

      <v-select
        class="mr-5"
        :value="$i18n.locale"
        style="max-width: 100px; margin-left: 30px"
        flat
        hide-details
        :items="$i18n.locales"
        label="Lang"
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
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn text to="/auth/login">
          Login
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <v-container fluid="">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <snackbar-component></snackbar-component>
  </v-app>
</template>

<script>
import SnackbarComponent from '~/components/SnackbarComponent'

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
      currentRole: 'anonym',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: `/`
        },
        {
          icon: 'mdi-apps',
          title: 'After login',
          to: '/after-login'
        },
        {
          icon: 'mdi-apps',
          title: 'Terms and conditions',
          to: '/terms-and-conditions'
        }
      ],
      title: 'QUESADILA',
      selectedRole: 'anonym'
    }
  },
  methods: {
    handleChange(lang) {
      this.$router.push(this.switchLocalePath(lang))
    },
    handleRoleChange(role) {
      this.$router.push(`/${role}`)
      this.currentRole = role
    }
  }
}
</script>
