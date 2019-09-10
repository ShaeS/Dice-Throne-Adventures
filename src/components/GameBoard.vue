<template>
  <div class="game-board" :style="{'grid-template-rows': `repeat(${boardHeight}, 300px)`}">
    <div
      class="row"
      v-for="(row, i) in boardTiles"
      :key="i"
      :style="{ 'grid-template-columns': `repeat(${boardWidth}, 300px)`}"
    >
      <component :is="tile ? 'GameTile' : 'div'" v-for="(tile, j) in row" :key="j" :tile="tile" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameTile from './GameTile.vue';

export default {
  components: {
    GameTile,
  },
  computed: {
    boardTiles() {
      return this.$store.state.boardTiles;
    },
    ...mapGetters([
      'boardWidth',
      'boardHeight',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.game-board {
  display: grid;
  grid-gap: var(--spacing-lg);

  .row {
    display: grid;
    grid-gap: var(--spacing-lg);
  }
}

.player-piece {
  width: 60px;
  height: 60px;
  background: red;
  position: absolute;
}
</style>
