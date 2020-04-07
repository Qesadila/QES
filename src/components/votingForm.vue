<template>
  <form>

    <v-card style="padding: 10px">
      <v-text-field
        v-model="voting.label"
        :counter="255"
        :label="$t('label')"
        required
      ></v-text-field>

      <datepicker @fromSet="fromSet" @untilSet="untilSet"></datepicker>

      <div v-if="dateError" style="color: red">
        {{ dateError }}
      </div>

    </v-card>

    <v-divider/>

    <li v-for="(form, formNr) in voting.forms" style="list-style-type: none;">
      <v-card style="padding: 10px; margin-bottom: 10px" >
        <v-text-field
          v-model="form.question"
          :error-messages="questionErrors(formNr)"
          :counter="255"
          :label="$t('Question')"
          required
          @input="$v.voting.forms.$each.$iter[formNr].question.$touch()"
          @blur="$v.voting.forms.$each.$iter[formNr].question.$touch()" 
        ></v-text-field>

        <li v-for="(answer, answerNr) in form.answers" style="list-style-type: none;">
          <v-text-field
            v-model="answer.text"
            :error-messages="answerErrors(formNr, answerNr)"
            :label="$t('Answer') + ' ' + (answerNr + 1)"
            required
            @input="$v.voting.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.$touch()"
            @blur="$v.voting.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.$touch()"
            style="width: 98%"
          ></v-text-field>
          <div v-if="form.answers.length > 1" @click="removeAnswer(form, answer)" title="Remove answer" class="font-icon-wrapper" style="width: 2%;border: none;float: right;margin-top: -55px; color: red">
            <i class="pe-7s-close"> </i>
          </div>
        </li>

        <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success"  @click="addNewAnswer(form)">
          <!-- style="margin-top: 10px" -->
            <font-awesome-icon class="mr-2" icon="plus"/>
            {{ $t('AddNewAnswer') }}
        </button>

        <!-- <div style="margin-top: 20px">{{ $t('numberOfPositiveAnswers') }}:</div> <v-text-field
          v-model="form.numberOfPositiveAnswers"
          :error-messages="positiveErrors(formNr)"
          required
          type="number"
          min="0"
          :max="form.answers.length"
          @input="$v.forms.$each.$iter[formNr].numberOfPositiveAnswers.$touch()"
          @blur="$v.forms.$each.$iter[formNr].numberOfPositiveAnswers.$touch()" 
          style="width: 3%"
        ></v-text-field>

        <div>{{ $t('numberOfNegativeAnswers') }}:</div> <v-text-field
          v-model="form.numberOfNegativeAnswers"
          :error-messages="negativeErrors(formNr)"
          required
          type="number"
          min="0"
          :max="form.answers.length"
          @input="$v.forms.$each.$iter[formNr].numberOfNegativeAnswers.$touch()"
          @blur="$v.forms.$each.$iter[formNr].numberOfNegativeAnswers.$touch()" 
          style="width: 3%"
        ></v-text-field> -->
      
        <!-- <v-checkbox
          v-model="form.mandatory"      
          :label="$t('Mandatory')"
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox> -->

        <v-checkbox
          v-model="form.public_"      
          :label="$t('Public')"
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
                  <!-- style="margin-top: -20px;" -->

        <div v-if="voting.forms.length > 1" @click="removeForm(form)" title="Remove question" class="font-icon-wrapper" style="width: 2%;border: none;float: right;margin-top: -55px; color: red">
          <i class="pe-7s-close"> </i>
        </div>
      </v-card>
    </li>

    <div style="margin-bottom: 10px;">
      <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success" @click="addNewForm">
        <font-awesome-icon class="mr-2" icon="plus"/>
        {{ $t('AddNewQuestion') }}
      </button>
    </div>
    
    <v-btn @click="submit">{{ $t('submit') }}</v-btn>
    <v-btn @click="clear">{{ $t('clear') }}</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minValue } from 'vuelidate/lib/validators'

  import { VotingForm, Response } from '@/services/VotingForm_pb'
  import { VotingClient } from '@/services/VotingForm_grpc_web_pb'

  import datepicker from '@/components/rangeDatepicker';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  const blankForm = {
                            question: '',
                            mandatory: false,
                            public_: false,
                            numberOfPositiveAnswers: 2,
                            numberOfNegativeAnswers: 1,
                            answers: [ { text: "" } ]
                        }
  const blankVoting = {
                    openFrom: null, 
                    openUntil: null,
                    name:'',
                    forms: [ blankForm ]
                }

  export default {
    mixins: [validationMixin],

    components: {
      datepicker,
      'font-awesome-icon': FontAwesomeIcon,
    },

    props: {
      data: {
        type: Object,
        description: "Existing voting form's data"
      }
    },

    validations: {
      voting: {
        name: { required }, // todo: touch stuff for name...
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
      }
    },

    data: () => ({   
      dateError: "",
      voting: { forms: [] }
    }),

    computed: {
      
    },

    mounted() {
      if (this.data) {
        this.voting = this.data
      } else {
        this.addNewForm()
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
        this.submitToServer()
      },
      clear () {
        this.$v.$reset()
        this.voting = JSON.parse(JSON.stringify(blankVoting))
      },

      submitToServer() {
        var votingService = new VotingClient('https://qesadila.azurewebsites.net/');

        var request = new VotingForm();
        // request.setOpenFrom(null);       // todo: couldn't figure out how to set request
        var metadata = {'custom-header-1': 'value1'};
        var call = votingService.createForm(request, metadata, function(err, response) {
          if (err) {
            console.log(err.code);
            console.log(err.message);
          } 
          // else {
          //   console.log(response.getMessage());
          // }
        });
        call.on('status', function(status) {
          console.log('code:'+status.code);
          console.log('details:'+status.details);
          console.log('metadata:')
          console.log(status.metadata);
        });
      },       

      questionErrors (nr) {
        let errors = []
        if (!this.$v.voting.forms.$each.$iter[nr].question.$dirty) return errors
        !this.$v.voting.forms.$each.$iter[nr].question.required && errors.push(this.$t('QuestionRequired'))
        return errors
      },
      positiveErrors(formNr) {

      },
      negativeErrors(formNr) {

      },
      answerErrors (formNr, answerNr) {
        let errors = []
        if (!this.$v.voting.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.$dirty) return errors
        !this.$v.voting.forms.$each.$iter[formNr].answers.$each.$iter[answerNr].text.required && errors.push(this.$t('AnswerRequired'))
        return errors
      },

      fromSet(val) {
        if (this.until < val) {
          this.dateError = this.$t('OpenUntilLessThanOpenFrom')
        } else {
          this.from = val
          this.dateError = ""
        }
      },
      untilSet(val) {
        if (val < this.from) {
          this.dateError = this.$t('OpenUntilLessThanOpenFrom')
        } else {
          this.until = val
          this.dateError = ""
        }        
      },

      addNewAnswer(form) {
        form.answers.push({ text: "" })
      },
      removeAnswer(form, answer) {
        form.answers.splice(form.answers.indexOf(answer), 1)
      },

      addNewForm() {
        this.voting.forms.push(JSON.parse(JSON.stringify(blankForm)))
      },
      removeForm(form) {
        this.voting.forms.splice(this.voting.forms.indexOf(form), 1)
      }
    }
  }
</script>
