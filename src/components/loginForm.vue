<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center v-if="!flag">
        <v-flex xs12 sm6 md4>
          <v-card class="elevation-12">
            <v-toolbar dark class="deep-purple darken-3">
              <v-toolbar-title justify-center class="font-weight-medium">Login Form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    class="inputs"
                    v-model="email"
                    :rules="emailRules()"
                    label="E-mail :"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12>
                  <v-text-field
                    class="inputs"
                    type="password"
                    v-model="password"
                    :rules="passwordRules()"
                    label="Password :"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark class="deep-purple darken-3 elevation-6" v-on:click="getCredentials">Login</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center v-if="flag">
        <v-flex xs12 sm6 md4>
          <v-card class="elevation-3">
            <v-toolbar class="deep-purple lighten-4">
              <v-spacer></v-spacer>
              <v-toolbar-title>
                <h1>Login Status</h1>
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text align-center>
              <h2>Login Sucessfull {{ type }} !!!</h2>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-on:click="loginSucess('./home')">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar v-model="snackbar" :top="y === 'top'">
        {{ text }}
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-content>
</template> 

<script>
export default {
  data: () => ({
    errors: [],
    data: "",
    email: "",
    password: "",
    flag: false,
    snackbar: false,
    y: "top",
    x: null,
    mode: "",
    timeout: 6000,
    text: "Fill all the credentials",
    type: "",
    name: "",
    details: []
  }),
  computed: {
    userLogin() {
      return this.$store.getters.userLogin;
    }
  },
  methods: {
    emailRules() {
      return [
        v => !!v || "E-mail is required",
        v =>
          /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v) || "E-mail must be valid"
      ];
    },
    passwordRules() {
      return [
        v => !!v || "Password is required",
        v =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/.test(
            v
          ) || "Password must be valid"
      ];
    },
    getCredentials() {
      this.$store
        .dispatch("checkData")
        .then(() => {
          this.$store.getters.userLogin.user.filter(el => {
            if (el.email == this.email && el.password == this.password) {
              this.flag = true;
              this.type = el.type;
              localStorage.setItem("name", el.name);
            }
            if (this.email.length == 0 && this.password.length == 0) {
              this.snackbar = true;
            }
          });
        })
        .catch(error => console.log("error :-", error));
    },
    loginSucess(name) {
      this.$router.push(name);
    }
  }
};
</script> 


<style>
</style>