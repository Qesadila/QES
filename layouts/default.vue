<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
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
    <v-app-bar :clipped-left="clipped" fixed app justify="between">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-select
        v-model="selectedRole"
        style="max-width: 300px; margin-left: 30px"
        flat
        hide-details
        :items="roles"
        label="Role"
      ></v-select>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      title: 'QUESADILA',
      selectedRole: 'anonym'
    }
  }
}
</script>
