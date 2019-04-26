<template>
  <v-dialog max-width="600px">
    <v-card>
      <v-card-title>Login Successful</v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
import loginForm from "./components/loginForm.vue";

export default {
  components: {
    "login-form": loginForm
  }
};
</script>

<style>
</style>
