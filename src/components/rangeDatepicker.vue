<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="from"
            :label="$t('OpenFrom')"
            prepend-icon="event"
            readonly
            v-on="on"
            style="margin-left: 10px;"
          ></v-text-field>
        </template>
        <v-date-picker v-model="from" @input="menu = false"></v-date-picker>
      </v-menu>
    </v-flex>

    <v-flex xs12 sm6 md4>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="until"
            :label="$t('OpenUntil')"
            prepend-icon="event"
            readonly
            v-on="on"
            style="margin-left: 10px;"
          ></v-text-field>
        </template>
        <v-date-picker v-model="until" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      from: null,
      until: null
    }),

    watch: {
      from(val) {
        this.$emit('fromSet', val)
      },
      until(val) {
        this.$emit('untilSet', val)
      }
    }
  }
</script>
