import Vue from 'vue';
import Vuex from 'vuex';

import monsters from './modules/monsters';
import tiles from './modules/tiles';
import players from './modules/players';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bossCP: 10,
    gold: 0,
  },
  mutations: {
    decrementState(state, payload) {
      let val = state[payload];
      val--;
      state[payload] = val;
    },
    incrementState(state, payload) {
      let val = state[payload];
      val++;
      state[payload] = val;
    },
  },
  modules: {
    monsters,
    tiles,
    players,
  },
});
