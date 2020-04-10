<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          {{ mockForm.title }}
        </div>

        <div
          v-for="(question, index) in mockForm.questions"
          :key="question.id"
          class="px-12"
        >
          <div class="body-2 mb-2">Question {{ index + 1 }}</div>
          <div class="title">{{ question.text }}</div>
          <div class="pl-5">
            <v-radio-group>
              <v-radio
                v-for="option in question.options"
                :key="option.id"
                :label="option.text"
                :value="option.value"
                class="my-2"
              >
              </v-radio>
            </v-radio-group>
            <v-divider class="mb-10"></v-divider>
          </div>
        </div>
      </form>
    </v-card>
  </v-row>
</template>
<script>
const mockForm = {
  id: 'ASkjahdf24',
  title: 'This is mock form',
  questions: [
    {
      id: 1,
      text: 'This is mock qeustion in mock form for mock user.',
      type: 'one',
      options: [
        {
          id: 1,
          text: 'Mock answer 1',
          value: 1
        },
        {
          id: 2,
          text: 'Mock answer 2',
          value: 2
        },
        {
          id: 3,
          text: 'Mock answer 3',
          value: 3
        }
      ]
    },
    {
      id: 2,
      text: 'This is mock qeustion in mock form for mock user.',
      type: 'multiple',
      options: [
        {
          id: 4,
          text: 'Mock answer 4',
          value: 4
        },
        {
          id: 5,
          text: 'Mock answer 5',
          value: 5
        },
        {
          id: 6,
          text: 'Mock answer 6',
          value: 6
        }
      ]
    },
    {
      id: 3,
      text: 'This is mock qeustion in mock form for mock user.',
      type: 'text',
      options: [
        {
          id: 7,
          text: 'Mock answer 7',
          value: 7
        },
        {
          id: 8,
          text: 'Mock answer 8',
          value: 8
        },
        {
          id: 9,
          text: 'Mock answer 9',
          value: 9
        }
      ]
    }
  ]
}

export default {
  middleware: 'authenticated',
  data() {
    return {
      mockForm
    }
  }
}
</script>
