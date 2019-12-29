import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import routers from './router/index';
import store from './store/index';


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
new Vue({
  render: (h) => h(App),
  store,
  router: routers,

}).$mount('#app');
