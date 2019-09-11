const initialState = {
  activePlayer: 0,
  players: [
    {
      name: 'Shae',
      hero: 'Barbarian',
      position: [4, 1],
      color: 'rgb(205, 169, 93)',
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
};
