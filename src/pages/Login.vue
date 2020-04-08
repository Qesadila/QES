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
                  <span>{{$t('Please sign in to your account below.')}}</span>
                </h4>
              </div>
              
            <div v-if="message" style="text-align: center; color: red;">
              {{ message }}
            </div>

              <b-form-group
                  :label="$t('Email')"
                id="InputGroup1"
                label-for="Input1"
              >
                <b-form-input
                  id="Input1"
                  type="email"
                  v-model="form.email"
                  required
                  :placeholder="$t('Enter email...')"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group 
                :label="$t('Password')"
                id="InputGroup2" label-for="Input2">
                <b-form-input
                  id="Input2"
                  type="password"
                  v-model="form.password"
                  required
                  :placeholder="$t('Enter password...')"
                >
                </b-form-input>
              </b-form-group>
              
            </div>
            <div class="modal-footer clearfix">
              <div class="float-left">
                <router-link to="/" class="btn-lg btn btn-link" >{{$t('Cancel')}}</router-link>
              </div>
              <div class="float-left">
                <router-link to="/register" class="btn-lg btn btn-link">{{$t('Sign up now')}}</router-link>
              </div>
              <div class="float-left">
                <router-link to="/recoverPassword" class="btn-lg btn btn-link">{{$t('Recover password')}}</router-link>
              </div>
              <div class="float-right">
                <b-button variant="primary" size="lg" @click="login" >{{$t('Login')}}</b-button>
              </div>
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
      form: {
        email: "",
        password: "",
      },
      message: "",
    };
  },

  methods: {

    async login() {
      if (this.form.email && this.form.password) {
        try {
          this.message = "Sending authorisation request";
          let this2 = this;
          AuthorisationService
            .Login(this.form.email, shajs("sha256").update(this.form.password).digest("hex"))
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

        } catch (e) {
          console.log("login error",e);
        }
      } else {
        console.log("Musíte zadat přihlašovací údaje");
      }

      // .then(response => {
      // localStorage.setItem("loggedIn", true);
      // localStorage.setItem("role", "Voter");
      // this.$router.replace(this.$route.query.redirect || "/");
      // })
      // .catch(error => {
      //     console.log(error)
      //     this.message = error.message
      // })
    },
  },
};
</script>
