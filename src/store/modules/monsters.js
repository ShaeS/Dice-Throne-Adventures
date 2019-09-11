import GameMonsters from '../../decks/monsters';
import { shuffle, draw } from './utilities';

const initialState = {
  deck: GameMonsters,
  activeMonster: null,
  monsters: [],
};

export default {
  state: initialState,
  mutations: {
    addMonster(state, payload) {
      state.monsters.push(payload);
    },
    setActiveMonster(state, payload) {
      state.activeMonster = payload;
    },
    unsetActiveMonster(state) {
      state.activeMonster = null;
    },
  },
  actions: {
    drawMonster({ state, commit }, level) {
      const deck = shuffle(state.deck);
      const monster = draw(deck, level);
      commit('addMonster', monster);
      commit('setActiveMonster', monster);
    },
  },
};
