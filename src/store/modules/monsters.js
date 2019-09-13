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
    setMonsterDeck(state, payload) {
      state.deck = payload;
    },
    addMonster(state, payload) {
      state.monsters.push(payload);
    },
    removeMonster(state) {
      const index = state.monsters.findIndex(mon => mon.title === state.activeMonster.title && mon.health === 0);
      state.monsters.splice(index, 1);
    },
    setActiveMonster(state, payload) {
      state.activeMonster = payload;
    },
    unsetActiveMonster(state) {
      state.activeMonster = null;
    },
    setMonsterCP(state, payload) {
      const newCP = state.activeMonster.CP + payload;
      state.activeMonster.CP = newCP;
    },
    setMonsterHealth(state, payload) {
      const newHealth = state.activeMonster.health + payload;
      state.activeMonster.health = newHealth;
    },
  },
  actions: {
    drawMonster({ state, commit }, level) {
      const shuffledDeck = shuffle(state.deck);
      const { card, deck } = draw(shuffledDeck, level);
      commit('setMonsterDeck', deck);
      commit('addMonster', card);
      commit('setActiveMonster', card);
    },
  },
};
