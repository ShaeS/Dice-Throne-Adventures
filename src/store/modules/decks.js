import GameTiles from '../../decks/tiles';
import GameMonsters from '../../decks/monsters';
import GameLevels from '../../decks/levels';

const initialState = {
  monsters: GameMonsters,
  tiles: GameTiles,
  levels: GameLevels,
};

export default {
  state: initialState,
};
