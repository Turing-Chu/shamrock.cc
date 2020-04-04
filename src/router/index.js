import VueRouter from 'vue-router';
import Websites from '../components/Websites/Websites.vue';
import MV from '../components/MV/MV.vue';
import KLine from '../components/KLine.vue';
import Home from '../components/Home.vue';
import Menus from '../components/blog/Menus.vue';
import About from '../components/About.vue';
import Images from '../components/Pictures/Images.vue';
import Manjusaka from '../components/Pictures/Manjusaka.vue';
import WebsiteTemplate from '../components/Websites/WebsiteTemplate.vue';

const RoutersList = [
  {
    path: '/',
    name: '',
    component: Home,
  },
  {
    path: '/websites',
    name: 'Websites',
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
  {
    path: '/blog',
    name: 'Blog',
    component: Menus,
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: Images,
    children: [{
      path: '/pictures/manjusaka',
      component: Manjusaka,
      name: 'Manjusaka',
    }],
  },
  {
    path: '/about-me',
    name: 'About',
    component: About,
  },
  { path: '*', name: '', component: Home },
];
const routers = new VueRouter({
  mode: 'history',
  routes: RoutersList,
});

export default routers;
export {
  RoutersList,
};
