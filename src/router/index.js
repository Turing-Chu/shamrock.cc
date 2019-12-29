import VueRouter from 'vue-router';
import Websites from '../components/Websites/Websites.vue';
// import Frontend from '../components/Websites/Frontend.vue';
// import Language from '../components/Websites/Language.vue';

import MV from '../components/MV/MV.vue';
import KLine from '../components/KLine.vue';
import Home from '../components/Home.vue';
import WebsiteTemplate from '../components/Websites/WebsiteTemplate.vue';
// import Rust from '../components/Websites/Rust.vue';
import AddWebsite from '../components/Websites/Add.vue';

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
      }, {
        path: '/websites/add',
        component: AddWebsite,
        name: 'add-website',

      }],
      /* children: [
        {
          path: '/websites/frontend',
          component: Frontend,
          name: 'web-frontend',
        }, {
          path: '/websites/language',
          component: Language,
          name: 'web-language',
        }, {
          path: '/websites/rust',
          component: Rust,
          name: 'web-rust',
        }, {
          path: '/websites/add',
          component: Add,
          name: '/websites/add',
        },
      ],
      */
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
