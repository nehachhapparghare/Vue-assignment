<template>
  <v-app>
    <app-header v-if="isAuthenticated"></app-header>

    <router-view></router-view>

    <app-footer v-if="isAuthenticated"></app-footer>
  </v-app>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data: () => ({
    isAuthenticated: false
  }),

  created() {
    console.log(this.$route.name);
    if (this.$route.name == "home") {
      this.isAuthenticated = true;
    }
  }
};
</script>

<style>
</style>
