<template>
  <form>
    <li v-for="answer in answers" style="list-style-type: none;">
      <v-text-field
        v-model="question"
        :error-messages="questionErrors"
        :counter="10"
        label="Question"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>

      <datepicker3 @fromSet="fromSet" @untilSet="untilSet"></datepicker3>

      <div v-if="dateError" style="color: red">
        {{ dateError }}
      </div>

      <li v-for="answer in answers" style="list-style-type: none;">
        <v-text-field
          v-model="answer.text"
          label="Answer"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          style="width: 98%"
        ></v-text-field>
        <div v-if="answers.length > 1" @click="removeAnswer(answer)" class="font-icon-wrapper" style="width: 2%;border: none;float: right;margin-top: -55px">
          <i class="pe-7s-close"> </i>
        </div>
      </li>
      <div v-if="answersError" style="color: red">
        {{ answersError }}
      </div>

      <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" @click="addAnswer">
          <font-awesome-icon class="mr-2" icon="plus"/>
          Add New Answer
      </button>

    
      <v-checkbox
        v-model="mandatory"      
        label="Mandatory"
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-checkbox
        v-model="public_"      
        label="Public"
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
        style="margin-top: -20px;"
      ></v-checkbox>
    </li>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  import datepicker3 from '@/components/dateDialogAndMenu';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  export default {
    mixins: [validationMixin],

    components: {
      datepicker3,
      'font-awesome-icon': FontAwesomeIcon,
    },

    validations: {
      question: { required },
      // checkbox: {
      //   checked (val) {
      //     return val
      //   }
      // }
    },

    data: () => ({
      question: '',
      mandatory: false,
      public_: false,
      from: null,
      until: null,      
      answers: [ { text: "" } ],

      dateError: "",
      answersError: ""
    }),

    computed: {
      questionErrors () {
        const errors = []
        if (!this.$v.question.$dirty) return errors
        // !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.question.required && errors.push('Question is required.')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()

        if (!this.from || !this.until) {
          this.dateError = "Open from and Open until are required."
        }
        if (!this.answers.length) {
          this.answersError = "There must be at least one answer."
        }
      },
      clear () {
        this.$v.$reset()
        this.question = ''
        this.from = null
        this.until = null
        this.dateError = "",
        this.answers = [ { text: "" } ]
      }, 

      fromSet(val) {
        if (this.until < val) {
          this.dateError = 'Open until cannot be less than Open from.'
        } else {
          this.from = val
          this.dateError = ""
        }
      },
      untilSet(val) {
        if (val < this.from) {
          this.dateError = 'Open until cannot be less than Open from.'
        } else {
          this.until = val
          this.dateError = ""
        }        
      },

      addAnswer() {
        this.answers.push({ text: "" })
      },
      removeAnswer(answer) {
        this.answers.splice(this.answers.indexOf(answer), 1)
      }
    }
  }
</script>
