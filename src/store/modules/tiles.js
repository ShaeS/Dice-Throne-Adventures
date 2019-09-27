import GameTiles from '../../decks/tiles';
import GameLevels from '../../decks/levels';
import { shuffle, draw } from './utilities';

const initialState = {
  tileDeck: GameTiles,
  levelDeck: GameLevels,
  boardTiles: [],
  currentLevel: null,
};

export default {
  state: { ...initialState },
  getters: {
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
    setLevel(state, payload) {
      state.currentLevel = payload;
    },
    setBoardTiles(state, payload) {
      state.boardTiles = payload;
    },
    setRevealed(state, payload) {
      state.boardTiles[payload[0]][payload[1]].revealed = true;
    },
    resetTileState(state) {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
  actions: {
    revealTile({ commit, rootState }, payload) {
      let position;
      if (payload) {
        position = payload;
      } else {
        ({ position } = rootState.players.players[rootState.players.activePlayer]);
      }
      commit('setRevealed', position);
    },
    chooseLevel({ state, commit }, payload) {
      const deck = shuffle(state.levelDeck);
      const { card } = draw(deck, payload);
      commit('setLevel', card);
    },
    pickTiles({ state, commit }) {
      const deck = shuffle(state.tileDeck);
      let choseBoss = false;
      let bossAttempt = 1;
      const tiles = state.currentLevel.layout.map((row, i) => row.map((tile, j) => {
        if (tile) {
          if (tile.start) {
            return { start: true };
          }
          let chosen;
          if (tile.boss && bossAttempt < state.currentLevel.bossChance && !choseBoss) {
            const { card } = draw(deck, tile.level, null);
            chosen = {
              ...tile,
              ...card,
              revealed: false,
              position: [i, j],
            };
            bossAttempt++;
          } else if (tile.boss && bossAttempt === state.currentLevel.bossChance && !choseBoss) {
            const { card } = draw(deck, tile.level, true);
            chosen = {
              ...tile,
              ...card,
              revealed: false,
              position: [i, j],
            };
          } else {
            const { card } = draw(deck, tile.level, false);
            chosen = {
              ...tile,
              ...card,
              revealed: false,
              position: [i, j],
            };
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
  },
};
