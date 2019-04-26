<template>
  <v-app>
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
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
    // isAuthenticated: false,
    // value: 0
  }),
  // props: {
  //   type: String,
  //   required: true
  // },
  created() {
    console.log(this.$route);
  },
  methods: {
    // showTable() {
    //   this.isAuthenticated = true;
    // },
    // showNav(num) {
    //   this.value = num;
    // },
    // callReturnLogin() {
    //   this.isAuthenticated = false;
    // }
  }
};
</script>

<style scoped>
/* .loginPage {
  top: 27%;
  position: relative;
}
.menuTable {
  top: 30%;
  position: relative;
} */
</style>
