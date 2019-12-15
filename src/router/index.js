import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

import Vue from 'vue'
import Router from 'vue-router'
import Websites from '../components/Websites'
import Frontend from '../components/Websites/Frontend'

import MV from '../components/mv'
import KLine from '../components/KLine'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/websites',
      component: Websites,
      children: [
        {
          path: '/websites/frontend',
          component: Frontend,
          name: 'web-frontend'
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
