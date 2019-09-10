import GameTiles from '../../decks/tiles';
import GameMonsters from '../../decks/monsters';
import GameLevels from '../../decks/levels';
import GameLoot from '../../decks/loot';

const initialState = {
  monsters: GameMonsters,
  tiles: GameTiles,
  levels: GameLevels,
  loot: GameLoot,
};

export default {
  state: initialState,
};
