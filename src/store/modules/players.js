const initialState = {
  activePlayer: 0,
  players: [],
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
    setInitialPosition(state, payload) {
      state.players[payload.index].position = payload.position;
    },
    setActivePlayer(state, payload) {
      state.activePlayer = payload;
    },
    addPlayer(state, payload) {
      state.players.unshift(payload);
    },
    editPlayer(state, payload) {
      state.players.splice(state.activePlayer, 1, payload);
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
      }
      commit('setActivePlayer', index);
    },
    initialPlayerPositions({ state, commit, rootState }) {
      state.players.map((player, index) => {
        commit('setInitialPosition', { index, position: rootState.tiles.currentLevel.startingPosition });
        return null;
      });
    },
  },
};
