<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <div class="d-flex flex-row justify-end mr-5 mt-5">
        <v-btn icon to="/voting-form-manager"><v-icon>mdi-close</v-icon></v-btn>
      </div>
      <div class="d-flex flex-row justify-center py-5 display-1">
        Hello you can create your voting form here!
      </div>
      <div class="pa-12">
        <v-divider class="mb-5"></v-divider>

        <div>Name of the voting form</div>
        <v-text-field
          outlined
          placeholder="Provide name of the voting form"
        ></v-text-field>

        <div>Form open from</div>
        <v-dialog
          ref="dialogFrom"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              placeholder="Select date from"
              readonly
              outlined
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialogFrom.save(date)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-dialog>

        <div>Form open until</div>
        <v-dialog
          ref="dialogTo"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              placeholder="Select date from"
              readonly
              outlined
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialogTo.save(date)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-dialog>

        <div>Voter list ID</div>
        <v-select outlined placeholder="Select voter list"></v-select>

        <v-divider class="mb-5"></v-divider>

        <div class="display-1 mb-10">Questions:</div>
        <div
          v-for="(question, index) in numberOfQuestions"
          class="pr-6 mb-12"
          :key="index"
        >
          <div class="d-flex flex-row align-center">
            <v-card width="100%" elevation="3" class="pa-6">
              <div class="mb-5">{{ index + 1 }}. Question text</div>
              <v-text-field outlined></v-text-field>

              <v-card width="100%" elevation="0" class="pa-6">
                <div class="mb-5">Possible answers</div>
                <div
                  v-for="(answer, indexTwo) in numberOfanswers"
                  :key="indexTwo"
                  class="d-flex flex-row align-center mb-5"
                >
                  <div class="title mr-5">{{ indexTwo + 1 }}.</div>
                  <v-text-field hide-details outlined></v-text-field>
                  <v-btn icon large>
                    <v-icon color="red">mdi-minus</v-icon>
                  </v-btn>
                </div>

                <v-divider class="mb-5"></v-divider>

                <div class="d-flex flex-row justify-end">
                  <v-btn text x-large color="primary" @click="numberOfanswers++"
                    ><v-icon>mdi-plus</v-icon>Add new possible answer</v-btn
                  >
                </div>
              </v-card>
            </v-card>

            <v-divider class="mb-5"></v-divider>
            <v-btn color="red" small class="ml-12" width="48" height="48">
              <v-icon color="white">mdi-minus</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <v-divider></v-divider>

      <div class="d-flex flex-row justify-space-between px-5 my-5">
        <v-btn color="primary" x-large @click="numberOfQuestions++"
          >Add new question</v-btn
        >

        <v-btn color="green" x-large>
          <span class="white--text d-flex align-center">
            <v-icon left>mdi-check</v-icon>Save form</span
          ></v-btn
        >
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
