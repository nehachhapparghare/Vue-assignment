import Vue from 'vue'
import Vuex from "vuex"
import { menuModule } from "./modules/menuModule.js"
import { loginModule } from "./modules/loginModule.js"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
      menuModule,
      loginModule
    },
  });

  export default store;