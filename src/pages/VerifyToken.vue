<template>
  <div class="h-100">
    <div class="d-flex h-100 justify-content-center align-items-center">
      <b-col md="8" class="mx-auto app-login-box">

        <div class="modal-dialog w-100 mx-auto">
          <div class="modal-content">
            <div class="modal-body">
              <div class="h5 modal-title text-center">
                  <div class="app-logo-qes mx-auto mb-3" />
                <h4 class="mt-2">
                  <span>{{$t('Please verify your email address')}}</span>
                </h4>
              </div>

            <div v-if="message" style="text-align: center; color: red;">
              {{ message }}
            </div>

              <b-form-group
                  :label="$t('Token')"
                id="InputGroup1"
                label-for="Input1"
              >
                <b-form-input
                  id="Input1"
                  type="text"
                  v-model="form.token"
                  required
                  :placeholder="$t('Enter token from your email...')"
                >
                </b-form-input>
              </b-form-group>

            </div>
            <div class="modal-footer clearfix">
              <div class="float-right">
                <b-button variant="primary" size="lg" @click="login" >{{$t('Verify email')}}</b-button>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </div>
  </div>
</template>
<script>
import AuthorisationService from "../services/authorisationService";

export default {
  data() {
    return {
      form: {
        token: ""
      },
      message: "",
    };
  },

  methods: {

    async login() {

        try {
          this.message = "Sending token verification request";
          AuthorisationService
            .ConfirmEmailByToken(this.form.token)
            .then((res) => {
               if (res.status.code === 200) {
                this.$router.push("/login")
              }
            })
            .catch((error) => {
              if (error.response) {
                /* eslint-disable no-console */
                console.log("Request made and server responded");
                if(error.response.data.detail){
                    this.message = error.response.data.detail;
                }else if(error.response.data.title){
                    this.message = error.response.data.title;
                }
              } else if (error.request) {
                /* eslint-disable no-console */
                console.log("The request was made but no response was received",error.request);
              } else {
                /* eslint-disable no-console */
                console.log("Something happened in setting up the request that triggered an Error",error.message);
              }

            });

        } catch (e) {
          console.log("login error",e);
        }

    },
  },
};
</script>
