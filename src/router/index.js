import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

import Vue from 'vue'
import Router from 'vue-router'
import Websites from '../components/Websites/Websites'
import Frontend from '../components/Websites/Frontend'
import Language from '../components/Websites/Language'

import MV from '../components/MV/MV'
import KLine from '../components/KLine'
import Home from '../components/Home'
import Rust from '../components/Websites/Rust'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/websites',
      component: Websites,
      children: [
        {
          path: '/websites/frontend',
          component: Frontend,
          name: 'web-frontend'
        }, {
          path: '/websites/language',
          component: Language,
          name: 'web-language'
        }, {
          path: '/websites/rust',
          component: Rust,
          name: 'web-rust'
        }
      ]
    },
    {
      path: '/mv',
      name: 'MV',
      component: MV
    }, {
      path: '/kline',
      name: 'KLine',
      component: KLine
    }

  ]
})
