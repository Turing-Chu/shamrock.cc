// where we assemble modules and export the store

import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  actions,
});

export default store;
