<template>
  <form>
    <li v-for="(form, formNr) in forms" style="list-style-type: none;">
      <v-card style="padding: 10px; margin-bottom: 10px" >
        <v-text-field
          v-model="form.question"
          :error-messages="questionErrors(formNr)"
          :counter="255"
          label="Question"
          required
          @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()" 
        ></v-text-field>

        <datepicker :form="form" @fromSet="fromSet" @untilSet="untilSet"></datepicker>

        <div v-if="form.dateError" style="color: red">
          {{ form.dateError }}
        </div>

        <li v-for="(answer, answerNr) in form.answers" style="list-style-type: none;">
          <v-text-field
            v-model="answer.text"
            :error-messages="answerErrors(formNr, answerNr)"
            label="Answer"
            required
            @input="$v.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.$touch()"
            @blur="$v.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.$touch()"
            style="width: 98%"
          ></v-text-field>
          <div v-if="form.answers.length > 1" @click="removeAnswer(form, answer)" title="Remove answer" class="font-icon-wrapper" style="width: 2%;border: none;float: right;margin-top: -55px; color: red">
            <i class="pe-7s-close"> </i>
          </div>
        </li>

        <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" style="margin-top: 10px" @click="addNewAnswer(form)">
            <font-awesome-icon class="mr-2" icon="plus"/>
            Add New Answer
        </button>
      
        <v-checkbox
          v-model="form.mandatory"      
          label="Mandatory"
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-checkbox
          v-model="form.public_"      
          label="Public"
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
          style="margin-top: -20px;"
        ></v-checkbox>

        <div v-if="forms.length > 1" @click="removeForm(form)" title="Remove question" class="font-icon-wrapper" style="width: 2%;border: none;float: right;margin-top: -55px; color: red">
          <i class="pe-7s-close"> </i>
        </div>
      </v-card>
    </li>

    <div style="margin-bottom: 10px;">
      <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" @click="addNewForm">
        <font-awesome-icon class="mr-2" icon="plus"/>
        Add New Question
      </button>
    </div>
    
    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'

  import datepicker from '@/components/rangeDatepicker';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  const blankForm = {
    question: '',
    mandatory: false,
    public_: false,
    from: null,
    until: null,      
    answers: [ { text: "" } ],

    dateError: ""
  }

  export default {
    mixins: [validationMixin],

    components: {
      datepicker,
      'font-awesome-icon': FontAwesomeIcon,
    },

    props: {
      data: {
        type: Array,
        description: "Existing voting forms data"
      }
    },

    validations: {
      forms: {
        $each: {
          question: {
            required
          },
          answers: {
            required,
            $each: {
              text: {
                required
              }
            }
          }
        }
      }
    },

    data: () => ({   
      forms: []
    }),

    computed: {
      
    },

    mounted() {
      if (this.data) {
        this.forms = this.data
      } else {
        this.addNewForm()
      }
    },

    methods: {
      submit () {
        this.$v.$touch()

        this.forms.forEach(form => {
          if (!form.from || !form.until) {
            form.dateError = "Open from and Open until are required."
          }
        })
      },
      clear () {
        this.$v.$reset()

        this.forms = [ blankForm ]
      },       

      questionErrors (nr) {
        let errors = []
        if (!this.$v.forms.$each.$iter[nr].question.$dirty) return errors
        !this.$v.forms.$each.$iter[nr].question.required && errors.push('Question is required.')
        return errors
      },
      answerErrors (formNr, answerNr) {
        let errors = []
        if (!this.$v.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.$dirty) return errors
        !this.$v.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.required && errors.push('Answer is required.')
        return errors
      },

      fromSet(val, form) {
        if (form.until < val) {
          form.dateError = 'Open until cannot be less than Open from.'
        } else {
          form.from = val
          form.dateError = ""
        }
      },
      untilSet(val, form) {
        if (val < form.from) {
          form.dateError = 'Open until cannot be less than Open from.'
        } else {
          form.until = val
          form.dateError = ""
        }        
      },

      addNewAnswer(form) {
        form.answers.push({ text: "" })
      },
      removeAnswer(form, answer) {
        form.answers.splice(form.answers.indexOf(answer), 1)
      },

      addNewForm() {
        this.forms.push(blankForm)
      },
      removeForm(form) {
        this.forms.splice(this.forms.indexOf(form), 1)
      }
    }
  }
</script>
