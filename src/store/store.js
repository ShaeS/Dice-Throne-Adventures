import Vue from 'vue';
import Vuex from 'vuex';

import monsters from './modules/monsters';
import tiles from './modules/tiles';
import players from './modules/players';
import StatusEffects from '../decks/status';


Vue.use(Vuex);

const initialState = {
  gameActive: false,
  bossCP: 10,
  gold: 0,
  statusEffects: StatusEffects,
};

export default new Vuex.Store({
  state: initialState,
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
  },
  modules: {
    monsters,
    tiles,
    players,
  },
});
