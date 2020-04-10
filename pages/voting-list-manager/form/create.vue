<template>
  <v-row no-gutters class="fill-height pa-12" justify="center" align="center">
    <v-card width="100%">
      <form>
        <div class="d-flex flex-row justify-center py-5 display-1">
          Create New Voter List
        </div>
        <div class="d-flex flex-row justify-center px-12 mb-6 body">
          {{ mockForm.infoText }}
        </div>
        <v-divider class="mb-10"></v-divider>
        <div
          v-for="(question, index) in mockForm.questions"
          :key="question.id"
          class="px-12"
        >
          <div class="body-2 mb-2">Question {{ index + 1 }}</div>
          <div class="title">{{ question.text }}</div>
          <div class="pl-5">
            <v-radio-group
              @change="handleUserAnswerChange(question.id, $event)"
            >
              <v-radio
                v-for="option in question.options"
                :key="option.id"
                :label="option.text"
                :value="option.value"
                class="my-2"
              >
              </v-radio>
              <!-- Last option is always with value null as user dont want to answer this question -->
              <v-radio
                class="my-2"
                label="I do not want to answer"
                value="N/A"
              ></v-radio>
            </v-radio-group>
            <v-divider class="mb-10"></v-divider>
          </div>
        </div>
        <div class="d-flex flex-row justify-center px-12 mb-6 body">
          {{ mockForm.endingText }}
        </div>
        <div class="d-flex flex-row justify-center px-12 mb-6 body">
          <v-btn x-large color="primary" @click="submitForm">Send form</v-btn>
        </div>
      </form>
    </v-card>
  </v-row>
</template>
<script>
const mockForm = {
  id: 'ASkjahdf24',
  title: 'This is mock form',
  infoText:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nulla est. Pellentesque sapien. Pellentesque ipsum. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Aenean placerat. Integer pellentesque quam vel velit. Pellentesque arcu.',
  endingText: 'Thank you for participating. Your honesty, major',
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
      mockForm,
      userAnwers: {}
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted! ->', this.userAnwers)
    },
    handleUserAnswerChange(questionId, answerId) {
      this.userAnwers[questionId] = answerId
    }
  }
}
</script>
