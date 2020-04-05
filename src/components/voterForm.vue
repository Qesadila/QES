<template>
  <form>
      <v-card style="padding: 10px; margin-bottom: 10px" >
        <v-text-field
          v-model="voter.Name"
          :counter="255"
          label="Name"
          required
        ></v-text-field>
                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->


        <v-text-field
          v-model="voter.SurName"
          :counter="255"
          label="SurName"
          required
        ></v-text-field>

                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->


        <datepicker label="BirthDay" :data="voter.Birthday" @dateSet="dateSet" ></datepicker>

        <!-- <div v-if="form.dateError" style="color: red">
          {{ form.dateError }}
        </div> -->

        <v-text-field
          v-model="voter.CertHash"
          :counter="255"
          label="CertHash"
          required
        ></v-text-field>
                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->

        Voter Lists:<multiselect :options="voterLists"/>

        <v-text-field
          v-model="voter.FileLinkGDPR"
          :counter="255"
          label="FileLinkGDPR"
          required
        ></v-text-field>
                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->


      </v-card>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'

  import datepicker from '@/components/datepicker';
  import multiselect from '@/components/multiselect'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  const blankVoter = {
    Name: '',
    SurName: '',
    Birthday: '',
    CertHash: "",
    VoterListID: 0,
    FileLinkGDPR: "",
    UserID: 0
  }

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
        description: "Existing voters data"
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
      voter: {},
      voterLists: [ 'voter list 1', 'voter list 2', 'voter list 3' ]
    }),

    computed: {
      
    },

    mounted() {
      if (this.data) {
        this.voter = this.data
      } else {
        this.voter = blankVoter
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()

        this.voter = blankVoter
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
