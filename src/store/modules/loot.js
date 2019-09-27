import GameLoot from '../../decks/loot';
import { shuffle, draw } from './utilities';

const initialState = {
  deck: GameLoot,
};

export default {
  state: { ...initialState },
  mutations: {
    setLootDeck(state, payload) {
      state.deck = payload;
    },
  },
  actions: {
    drawLoot({ state, commit }, level) {
      const shuffledDeck = shuffle(state.deck);
      const { card, deck } = draw(shuffledDeck, level);
      commit('setLootDeck', deck);
      commit('setLoot', card);
    },
    recallLoot({ state, commit }, payload) {
      const lootList = payload.split(',');
      lootList.forEach((id) => {
        const { card, deck } = draw(state.deck, null, null, id);
        commit('setLootDeck', deck);
        commit('setLoot', card);
      });
    },
  },
};
