const initialState = {
  activePlayer: 0,
  players: [
    {
      name: 'Shae',
      hero: 'Barbarian',
      position: [4, 1],
      color: 'rgb(205, 169, 93)',
      statusEffects: [],
    },
    {
      name: 'Jasmine',
      hero: 'Pyromancer',
      position: [4, 1],
      color: 'rgb(100, 169, 240)',
      statusEffects: [],
    },
  ],
};

export default {
  state: initialState,
  getters: {
    playerInfo(state) {
      return state.players[state.activePlayer];
    },
    playerCurrentTile(state, getters, rootState) {
      const { position } = getters.playerInfo;
      if (rootState.tiles.boardTiles.length > 1) {
        return rootState.tiles.boardTiles[position[0]][position[1]];
      }
      return [];
    },
  },
  mutations: {
    setActivePlayer(state, payload) {
      state.activePlayer = payload;
    },
    addPlayer(state, payload) {
      state.players.push(payload);
    },
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
  },
  actions: {
    nextPlayer({ state, commit }) {
      let index = 0;
      if (state.activePlayer < state.players.length - 1) {
        index = state.activePlayer + 1;
        console.log(index);
      }
      commit('setActivePlayer', index);
    },
  },
};
