<template>
  <form>
      <v-card style="padding: 10px; margin-bottom: 10px" >
        <v-text-field
          v-model="votersList.name"
          :counter="255"
          :label="$t('label')"
          required
        ></v-text-field>
                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->

      <div style="float: left;margin-top: 20px;margin-right: 20px;">{{ $t('Voters') }}:</div>
      <multiselect style="margin-top: -25px;" :options="voters"/>

      </v-card>

    <v-btn @click="submit">{{ $t('submit') }}</v-btn>
    <v-btn @click="clear">{{ $t('clear') }}</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'

  import datepicker from '@/components/datepicker';
  import multiselect from '@/components/multiselect'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  const blankVotersList = [{
    id: 0,
    name: ''
  }]

  export default {
    mixins: [validationMixin],

    components: {
      datepicker,
      multiselect,
      'font-awesome-icon': FontAwesomeIcon,
    },

    props: {
      data: {
        type: Object,
        description: "Existing voters list data"
      },
      voters: {
        type: Array,
        description: "List of all voters available"
      }
    },

    validations: {
      // forms: {
      //   $each: {
      //     question: {
      //       required
      //     },
      //     answers: {
      //       required,
      //       $each: {
      //         text: {
      //           required
      //         }
      //       }
      //     }
      //   }
      // }
    },

    data: () => ({   
      votersList: []
    }),

    computed: {
      
    },

    mounted() {
      if (this.data) {
        this.votersList = this.data
      } else {
        this.votersList = blankVotersList
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()

        this.votersList = blankVotersList
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

      dateSet(val) {
        // if (form.until < val) {
        //   form.dateError = 'Open until cannot be less than Open from.'
        // } else {
        //   form.from = val
        //   form.dateError = ""
        // }
      }
    }
  }
</script>
