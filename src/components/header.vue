<template>
  <v-card>
    <v-toolbar color="blue lighten-3" fixed app>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <strong>Welcome to Restaurant</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-on:click="myLoggout" color="primary">Logout</v-btn>
    </v-toolbar>
    <app-navigation :drawer="drawer"></app-navigation>
  </v-card>
</template>

<script>
import Navigation from "./navigation.vue";

export default {
  components: {
    "app-navigation": Navigation
  },
  data() {
    return {
      count: 0,
      drawer: false
    };
  },
  methods: {
    myLoggout() {
      localStorage.removeItem("name");
      this.$emit("returnLogin");
    }
  }
};
</script>

<style>
</style>
