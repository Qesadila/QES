<template>
  <div class="d-flex flex-row align-center pa-6">
    <div class="title mr-5">{{ answerNumber }}.</div>
    <v-text-field
      v-model="textFieldValue"
      hide-details
      outlined
      @change="emitAnswer"
    ></v-text-field>
    <!-- Will be implemented later -->
    <!-- <v-btn icon large class="ml-5">
      <v-icon color="red">mdi-minus</v-icon>
    </v-btn> -->
  </div>
</template>
<script>
export default {
  props: {
    answerNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      textFieldValue: ''
    }
  },
  methods: {
    emitAnswer() {
      this.$emit('answer-text-changed', this.textFieldValue)
    }
  }
}
</script>
