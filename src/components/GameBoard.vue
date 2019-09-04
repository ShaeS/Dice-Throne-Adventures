<template>
    <div ref="board" class="game-board">
        <div class="row" v-for="row in levelLayout.layout">
            <component :is="tile ? 'GameTile' : 'div'" v-for="tile in row" :tile="tileDeck[0]" />
        </div>
    </div>
</template>

<script>
import panzoom from 'panzoom';
import GameTile from './GameTile.vue';

export default {
  components: {
    GameTile,
  },
  data() {
    return {
      tileDeck: this.$store.state.decks.tiles,
      levelLayout: this.$store.state.decks.levels[0],
    };
  },
  mounted() {
    panzoom(this.$refs.board, {
      zoomSpeed: 0.01,
      maxZoom: 1.5,
      minZoom: 0.5,
    });
  },
};
</script>

<style lang="scss" scoped>
.game-board {
    display: grid;
    grid-template-rows: repeat( 5, 300px );
    grid-gap: var(--spacing-sm);

    .row {
        grid-template-columns: repeat( 6, 300px );
        display: grid;
        grid-gap: var(--spacing-sm);
    }
}
</style>
