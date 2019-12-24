import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import routers from './router/index';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router: routers,
}).$mount('#app');
