<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%" class="pa-12">
      <div class="d-flex flex-row justify-center py-5 display-1">
        Hello you can create your voting form here!
      </div>
      <v-divider class="mb-5"></v-divider>

      <div>Name of the voting form</div>
      <v-text-field outlined></v-text-field>

      <div>Until</div>
      <v-text-field outlined></v-text-field>

      <div>To</div>
      <v-text-field outlined></v-text-field>

      <div>Voter list ID</div>
      <v-text-field outlined></v-text-field>
      <v-divider class="mb-5"></v-divider>

      <div class="display-1 mb-10">Questions:</div>
      <div
        v-for="(question, index) in numberOfQuestions"
        class="px-5 mb-12"
        :key="index"
      >
        <v-card width="100%" elevation="3" class="pa-6">
          <div class="mb-5">Question text</div>
          <v-text-field outlined></v-text-field>

          <v-card width="100%" elevation="3" class="pa-6">
            <div class="mb-5">Possible answers</div>
            <v-text-field
              v-for="(answer, indexTwo) in numberOfanswers"
              :key="indexTwo"
              outlined
            ></v-text-field>

            <v-divider class="mb-5"></v-divider>

            <div class="d-flex flex-row justify-center">
              <v-btn text x-large color="primary" @click="numberOfanswers++"
                >Add new answer</v-btn
              >
            </div>
          </v-card>

          <!-- ADD NEW QUESTION -->
          <div class="d-flex flex-row justify-center mt-10">
            <v-btn x-large color="primary" @click="numberOfQuestions++"
              >Add new question</v-btn
            >
          </div>
        </v-card>
      </div>
    </v-card>
  </v-row>
</template>
<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      numberOfQuestions: 1,
      numberOfanswers: 2
    }
  }
}
</script>
