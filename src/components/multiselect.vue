<template>
    <v-container
      fluid
      grid-list-xl
    >
      <v-layout
        align-center
        wrap
      >
        <v-flex xs12 sm6>
          <v-select
            v-model="value"
            :items="options"
            attach
            chips
            :label="$t('SelectMore')"
            multiple
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      value: ['foo', 'bar', 'fizz', 'buzz']
    }),

    props: {
      options: {
        type: Array,
        description: "List of options for the selection"
      }
    }
  }
</script>
