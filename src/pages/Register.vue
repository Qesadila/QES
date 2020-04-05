<template>
  <div>
    <div class="h-100 bg-premium-dark">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <b-col md="8" class="mx-auto app-login-box">
          <div class="app-logo-inverse mx-auto mb-3" />

          <div class="modal-dialog w-100">
            <div class="modal-content">
              <div class="modal-body">
                <h5 class="modal-title">
                  <h4 class="mt-2">
                    <div>Welcome,</div>
                    <span
                      >It only takes a
                      <span class="text-success">few seconds</span> to create
                      your account</span
                    >
                  </h4>
                </h5>
                <div class="divider" />
                <b-form-group
                  id="exampleInputGroup1"
                  label-for="exampleInput1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="exampleInput1"
                    type="email"
                    required
                    placeholder="Enter email..."
                    v-model="form.email"
                  >
                  </b-form-input>
                </b-form-group>
                <b-form-group
                  id="exampleInputGroup12"
                  label-for="exampleInput12"
                >
                  <b-form-input
                    id="exampleInput12"
                    type="text"
                    required
                    placeholder="Enter name..."
                    v-model="form.name"
                  >
                  </b-form-input>
                </b-form-group>
                <div class="row">
                  <div class="col-md-6">
                    <b-form-group
                      id="exampleInputGroup2"
                      label-for="exampleInput1"
                    >
                      <b-form-input
                        id="exampleInput2"
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
                      id="exampleInputGroup2"
                      label-for="exampleInput2"
                    >
                      <b-form-input
                        id="exampleInput3"
                        type="password"
                        required
                        placeholder="Repeat password..."
                        v-model="form.repeatPassword"
                      >
                      </b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <b-form-checkbox
                  v-model="form.acceptedTermOfUse"
                  name="check"
                  id="exampleCheck"
                >
                  Accept our
                  <a href="javascript:void(0);">Terms and Conditions</a>.
                </b-form-checkbox>
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
                <b-button
                  color="primary"
                  class="btn-wide btn-pill btn-shadow btn-hover-shine"
                  size="lg"
                  @click="register"
                  >Create Account
                </b-button>
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
        name: "",
        password: "",
        repeatPassword: "",
        language: "",
        acceptedTermOfUse: false,
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
          try {
            const fd = new FormData();
            fd.append("email", this.form.email);
            fd.append("name", this.form.name);
            fd.append("language", this.$i18n.locale);
            fd.append(
              "passwordHash",
              shajs("sha256").update(this.form.password).digest("hex")
            );

            const { data } = await this.$http.post(
              "http://qesadila.azurewebsites.net/v1/Authorize/Register",
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
          console.log("Musíte zadat hesla, která se shodují.");
        }
      } else {
        console.log("Bez souhlasu není možné registrovat");
      }
    },
  },
};
</script>
