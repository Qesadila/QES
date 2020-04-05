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
            v-model="date"
            :label="label"
            prepend-icon="event"
            readonly
            v-on="on"
            style="margin-left: 10px;"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
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
      date: null
    }),

    props: {
      label: {
        type: String,
        description: "Help text for blank date"
      },
      data: {
        type: Date,
        default: () => new Date()
      }
    },

    mounted() {
      if (this.data) {
        this.date = this.data.toISOString().substr(0, 10)
      }
    },

    watch: {
      date(val) {
        this.$emit('dateSet', val)
      }
    }
  }
</script>
