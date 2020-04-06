<template>
  <form>
      <v-card style="padding: 10px; margin-bottom: 10px" >
        <v-text-field
          v-model="voter.name"
          :counter="255"
          :label="$t('name')"
          required
          style="width: 49%; float: left; margin-right: 10px"
        ></v-text-field>
                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->


        <v-text-field
          v-model="voter.surName"
          :counter="255"
          :label="$t('surName')"
          required
          style="width: 49%"
        ></v-text-field>

                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->


        <datepicker 
          :label="$t('birthDay')" 
          :data="voter.birthday" 
          @dateSet="dateSet" ></datepicker>

        <!-- <div v-if="form.dateError" style="color: red">
          {{ form.dateError }}
        </div> -->

              <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->

        <div style="float: left;margin-top: 20px;margin-right: 20px;">{{ $t('voterLists') }}:</div>
        <multiselect style="margin-top: -30px;" :options="votersLists.map(votersList => votersList.name)" @change="change"/>

        <v-text-field
          v-model="voter.certHash"
          :counter="255"
          label="CertHash"
          required
        ></v-text-field>

        <v-text-field
          v-model="voter.fileLinkGDPR"
          :counter="255"
          label="FileLinkGDPR"
          required
        ></v-text-field>
                  <!-- :error-messages="questionErrors(formNr)"
                            @input="$v.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.forms.$each.$iter[formNr].question.$touch()"  -->


      </v-card>

    <v-btn @click="submit">{{ $t('submit') }}</v-btn>
    <v-btn v-if="showCancel" @click="cancel">{{ $t('cancel') }}</v-btn>
    <v-btn @click="clear">{{ $t('clear') }}</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'

  import datepicker from '@/components/datepicker';
  import multiselect from '@/components/multiselect'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  const blankVoter = {
    name: '',
    surName: '',
    birthday: null,
    certHash: "",
    fileLinkGDPR: "",
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
      },
      votersLists: {
        type: Array,
        description: "Voters lists available for the voter"
      },
      showCancel: {
        type: Boolean,
        description: "Whether to show Cancel button"
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
    }),

    computed: {
      
    },

    mounted() {
      if (this.data) {
        this.voter = this.data
      } else {
        this.voter = JSON.parse(JSON.stringify(blankVoter))
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
        this.$emit('submit', this.voter)
        console.log(this.voter)
      },
      clear () {
        this.$v.$reset()
        this.voter = JSON.parse(JSON.stringify(blankVoter))
      },       
      cancel() {
        this.$emit('cancel')
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
      },
      change(data) {
        this.voter.votersLists = data
      }
    }
  }
</script>
