import VueRouter from 'vue-router';
import Websites from '../components/Websites/Websites.vue';
import MV from '../components/MV/MV.vue';
import KLine from '../components/KLine.vue';
import Home from '../components/Home.vue';
import WebsiteTemplate from '../components/Websites/WebsiteTemplate.vue';

const routers = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/websites',
      component: Websites,
      children: [{
        path: '/websites/:website',
        component: WebsiteTemplate,
        name: 'template',
      }],
    },
    {
      path: '/mv',
      name: 'MV',
      component: MV,
    }, {
      path: '/kline',
      name: 'KLine',
      component: KLine,
    },
    { path: '*', component: Home },
  ],
});

export default routers;
