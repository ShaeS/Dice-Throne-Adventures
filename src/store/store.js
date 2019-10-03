import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import monsters from './modules/monsters';
import tiles from './modules/tiles';
import players from './modules/players';
import loot from './modules/loot';


Vue.use(Vuex);

const initialState = {
  gameActive: false,
  bossCP: 10,
  gold: 0,
};

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: { ...initialState },
  mutations: {
    setGameActive(state) {
      state.gameActive = true;
    },
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
    addStatus(state, { status, characterType }) {
      if (characterType === 'player') {
        state.players.players[state.players.activePlayer].statusEffects.push(status);
      } else if (characterType === 'monster') {
        state.monsters.activeMonster.statusEffects.push(status);
      }
    },
    removeStatus(state, { index, characterType }) {
      if (characterType === 'player') {
        state.players.players[state.players.activePlayer].statusEffects.splice(index, 1);
      } else if (characterType === 'monster') {
        state.monsters.activeMonster.statusEffects.splice(index, 1);
      }
    },
    resetRootState(state) {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
  actions: {
    newGame({ commit }) {
      commit('resetRootState');
      commit('resetTileState');
      commit('resetMonsterState');
    },
  },
  modules: {
    monsters,
    tiles,
    players,
    loot,
  },
});
