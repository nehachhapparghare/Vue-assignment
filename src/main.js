import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import VueRouter from 'vue-router'
import Routes from './routes' 
import { store } from "./store";

Vue.use(Vuetify, {
  iconfont: 'md'
});
// Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
}).$mount('#app');
