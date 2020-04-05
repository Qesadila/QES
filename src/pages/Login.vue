<template>
  <div>
    <div class="h-100 bg-plum-plate bg-animation">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <b-col md="8" class="mx-auto app-login-box">
          <div class="app-logo-inverse mx-auto mb-3" />

          <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
              <div class="modal-body">
                <div class="h5 modal-title text-center">
                  <h4 class="mt-2">
                    <div>Welcome back,</div>
                    <span>Please sign in to your account below.</span>
                  </h4>
                </div>
                <b-form-group
                  id="exampleInputGroup1"
                  label-for="exampleInput1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="exampleInput1"
                    type="email"
                    v-model="form.email"
                    required
                    placeholder="Enter email..."
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2" label-for="exampleInput2">
                  <b-form-input
                    id="exampleInput2"
                    type="password"
                    v-model="form.password"
                    required
                    placeholder="Enter password..."
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-checkbox name="check" id="exampleCheck">
                  Keep me logged in
                </b-form-checkbox>
                <div class="divider" />
                <h6 class="mb-0">
                  No account?
                  <router-link to="/register" class="text-primary"
                    >Sign up now</router-link
                  >
                </h6>
              </div>
              <div v-if="message" style="text-align: center; color: red;">
                {{ message }}
              </div>
              <div class="modal-footer clearfix">
                <div class="float-left">
                  <a href="javascript:void(0);" class="btn-lg btn btn-link"
                    >Recover Password</a
                  >
                </div>
                <div class="float-left">
                  <b-button variant="primary" size="lg" @click="loginAnonymous"
                    >Anonymous Login</b-button
                  >
                </div>
                <div class="float-right">
                  <b-button variant="primary" size="lg" @click="login"
                    >Login</b-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="text-center text-white opacity-8 mt-3">
            Copyright &copy; ArchitectUI 2019
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import shajs from "sha.js";

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
    loginAnonymous() {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("role", "Anonymous");
      this.$router.replace(this.$route.query.redirect || "/voting");
    },

    async login() {
      if (this.form.email && this.form.password) {
        try {
          const fd = new FormData();
          fd.append("email", this.form.email);
          fd.append(
            "passwordSHA256Hash",
            shajs("sha256").update(this.form.password).digest("hex")
          );

          const { data } = await this.$http.post(
            "http://qesadila.azurewebsites.net/v1/Authorize/Login",
            fd
          );

          localStorage.setItem("token", data.token);
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("user", JSON.stringify(data.user));

          this.$router.push("/");
        } catch (e) {
          console.log(e);
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
