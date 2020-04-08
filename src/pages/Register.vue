<template>
  <div>
    <div class="d-flex h-100 justify-content-center align-items-center">
      <b-col md="8" class="mx-auto app-login-box">

        <div class="modal-dialog w-100">
          <div class="modal-content">
            <div class="modal-body">
              <h5 class="modal-title">
              
                <div class="app-logo-qes mx-auto mb-3" />
                <h4 class="mt-2">
                  <div>Qesadila registration</div>
                </h4>
              </h5>
              <div class="divider" />
            <div v-if="message" style="text-align: center; color: red;">
              {{ message }}
              <div class="divider" />
            </div>
              <b-form-checkbox
                v-model="form.acceptedTermOfUse"
                name="agreementCheck"
                id="Check"
              >
                I accept  <router-link to="/terms" class="btn btn-link">{{$t('Terms and Conditions &amp; GDPR compliance')}}</router-link>
              </b-form-checkbox>
              <b-form-checkbox
                v-model="form.acceptedMarketing"
                name="marketingCheck"
                id="marketingCheck"
              >
                I accept commercial communication
                <a href="javascript:void(0);"></a>.
              </b-form-checkbox>
              
              <div class="divider" />
              <b-form-group
                id="InputGroup1"
                label-for="email"
                label="Email"
              >
                <b-form-input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email please..."
                  v-model="form.email"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="InputGroup12"
                label-for="name"
                label="Name"
              >
                <b-form-input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name please..."
                  v-model="form.name"
                >
                </b-form-input>
              </b-form-group>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group
                    id="InputGroup2"
                    label-for="Input2"
                    label="Password"
                  >
                    <b-form-input
                      id="Input2"
                      type="password"
                      required
                      placeholder="Enter password..."
                      v-model="form.password"
                    >
                    </b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group
                    id="InputGroup3"
                    label-for="Input3"
                    label="Password check"
                  >
                    <b-form-input
                      id="Input3"
                      type="password"
                      required
                      placeholder="Repeat password..."
                      v-model="form.repeatPassword"
                    >
                    </b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="divider" />
              <h6 class="mb-0">
                Already have an account?
                <router-link to="/login" class="text-primary"
                  >Sign in</router-link
                >
                |
                <a href="javascript:void(0);" class="text-primary"
                  >Recover Password</a
                >
              </h6>
            </div>
            <div class="modal-footer d-block text-center">
                <b-button variant="primary" size="lg" @click="register" >{{$t('Create Account')}}</b-button>
            </div>
          </div>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import shajs from "sha.js";
import AuthorisationService from "../services/authorisationService";
export default {
  data() {
    return {
      message : "",
      form: {
        email: "",
        name: "",
        password: "",
        repeatPassword: "",
        language: "",
        acceptedTermOfUse: false,
        acceptedMarketing: false,
      },
    };
  },
  computed: {
    passwordMatchCheck() {
      return (
        this.form.password &&
        this.form.repeatPassword &&
        this.form.password === this.form.repeatPassword
      );
    },
  },
  methods: {
    async register() {
      if (this.form.acceptedTermOfUse) {
        if (this.passwordMatchCheck) {

          this.message = "Sending registration request";
          let this2 = this;
          AuthorisationService
            .Register(
              this.form.email,
              this.form.name,
              this.$i18n.locale,
              shajs("sha256").update(this.form.password).digest("hex"),
              this.form.acceptedTermOfUse,
              this.form.acceptedMarketing
              )
            .then(res => {
              console.log("Register ok",res);
              let verifyEmailToken = res.data;
              if(verifyEmailToken){
                this2.$router.push("/verify-token");
              }else{
                this.message = "Successfully registered, sending authentication request";
                AuthorisationService.Login(
                  this.form.email,
                  shajs("sha256").update(this.form.password).digest("hex"),
                  )
                  .then(res => {
                      console.log("Login ok",res);
                      let data = res.data;
                      localStorage.setItem("token", data.token);
                      localStorage.setItem("loggedIn", true);
                      localStorage.setItem("user", JSON.stringify(data.user));
                      this.$router.push("/");
                  })
                  .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log("Request made and server responded");
                      console.log(error.response.data.detail);
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                      if(error.response.data.detail){
                        this2.message = error.response.data.detail;
                      }else if(error.response.data.title){
                        this2.message = error.response.data.title;
                      }
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log("The request was made but no response was received");
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log("Something happened in setting up the request that triggered an Error");
                      console.log('Error', error.message);
                    }

                  });
              }
            })
            .catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log("Request made and server responded");
                console.log(error.response.data.detail);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if(error.response.data.detail){
                  this2.message = error.response.data.detail;
                }else if(error.response.data.title){
                  this2.message = error.response.data.title;
                }
              } else if (error.request) {
                // The request was made but no response was received
                console.log("The request was made but no response was received");
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Something happened in setting up the request that triggered an Error");
                console.log('Error', error.message);
              }

            });

        } else {
          console.log("Musíte zadat hesla, která se shodují.");
        }
      } else {
        console.log("Bez souhlasu není možné registrovat");
      }
    },
  },
};
</script>
