import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import routers from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(Vuex);
new Vue({
  render: (h) => h(App),
  store,
  router: routers,

}).$mount('#app');
