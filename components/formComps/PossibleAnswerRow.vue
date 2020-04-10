<template>
  <div class="d-flex flex-row align-center pa-6">
    <div class="title mr-5">{{ answerNumber }}.</div>
    <v-text-field
      hide-details
      outlined
      @change="$emit('answer-text-changed', value)"
    ></v-text-field>
    <v-btn icon large class="ml-5">
      <v-icon color="red">mdi-minus</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    answerNumber: {
      type: Number,
      required: true
    }
  }
}
</script>
