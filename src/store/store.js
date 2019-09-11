import Vue from 'vue';
import Vuex from 'vuex';

import decks from './modules/decks';

Vue.use(Vuex);

const drawCard = (state, deckName, level, boss) => {
  let index;
  if (boss === false) {
    index = state.decks[deckName].findIndex(card => card.level === level && card.enemyType !== 4);
  } else if (boss === true) {
    index = state.decks[deckName].findIndex(card => card.enemyType === 4);
  } else {
    index = state.decks[deckName].findIndex(card => card.level === level);
  }
  const [card] = state.decks[deckName].splice(index, 1);
  return card;
};

export default new Vuex.Store({
  state: {
    boardTiles: [],
    currentLevel: null,
    bossCP: 10,
    gold: 0,
    activePlayer: 0,
    players: [
      {
        name: 'Shae',
        hero: 'Barbarian',
        position: [4, 1],
        color: 'rgb(205, 169, 93)',
      },
    ],
  },
  getters: {
    playerInfo(state) {
      return state.players[state.activePlayer];
    },
    playerCurrentTile(state, getters) {
      const { position } = getters.playerInfo;
      if (state.boardTile) {
        return state.boardTiles[position[0]][position[1]];
      }
      return [];
    },
    boardWidth(state) {
      if (state.currentLevel) {
        return state.currentLevel.layout[0].length;
      }
      return 0;
    },
    boardHeight(state) {
      if (state.currentLevel) {
        return state.currentLevel.layout.length;
      }
      return 0;
    },
  },
  mutations: {
    setPlayerPosition(state, payload) {
      const position = state.players[state.activePlayer].position.slice();
      let newPosition = [];
      switch (payload) {
        case 'up':
          newPosition = [position[0] - 1, position[1]];
          break;
        case 'down':
          newPosition = [position[0] + 1, position[1]];
          break;
        case 'left':
          newPosition = [position[0], position[1] - 1];
          break;
        case 'right':
          newPosition = [position[0], position[1] + 1];
          break;
        default:
      }
      state.players[state.activePlayer].position = newPosition;
    },
    setShuffledDeck(state, payload) {
      state.decks[payload.deckName] = payload.array;
    },
    setLevel(state, payload) {
      state.currentLevel = payload;
    },
    setBoardTiles(state, payload) {
      state.boardTiles = payload;
    },
    revealTile(state) {
      const { position } = state.players[state.activePlayer];
      state.boardTiles[position[0]][position[1]].revealed = true;
    },
  },
  actions: {
    chooseLevel({ state, dispatch, commit }) {
      dispatch('shuffleDeck', 'levels');
      const card = drawCard(state, 'levels', 1);
      commit('setLevel', card);
    },
    pickTiles({ state, dispatch, commit }) {
      dispatch('shuffleDeck', 'tiles');
      let choseBoss = false;
      let bossAttempt = 1;
      const tiles = state.currentLevel.layout.map(row => row.map((tile) => {
        if (tile) {
          if (tile.start) {
            return { start: true };
          }
          let chosen;
          if (tile.boss && bossAttempt < state.currentLevel.bossChance && !choseBoss) {
            chosen = { ...tile, ...drawCard(state, 'tiles', tile.level, null), revealed: false };
            bossAttempt++;
          } else if (tile.boss && bossAttempt === state.currentLevel.bossChance && !choseBoss) {
            chosen = { ...tile, ...drawCard(state, 'tiles', tile.level, true), revealed: false };
          } else {
            chosen = { ...tile, ...drawCard(state, 'tiles', tile.level, false), revealed: false };
          }
          if (chosen.enemyType === 4) {
            choseBoss = true;
          }
          return chosen;
        }
        return null;
      }));
      commit('setBoardTiles', tiles);
    },
    shuffleDeck({ commit, state }, deckName) {
      const newArray = state.decks[deckName].slice();
      let currentIndex = newArray.length;
      let temporaryValue;
      let randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;
      }
      commit('setShuffledDeck', { deckName, array: newArray });
    },
  },
  modules: {
    decks,
  },
});
