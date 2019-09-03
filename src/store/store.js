import Vue from 'vue';
import Vuex from 'vuex';

import decks from './modules/decks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bossCP: 10,
    gold: 0
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    decks
  }
});