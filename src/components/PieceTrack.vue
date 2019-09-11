<template>
  <div
    class="piece-track"
    :style="{
      'grid-template-columns': `repeat(${boardWidth}, 300px)`,
      'grid-template-rows': `repeat(${boardHeight}, 300px)`
    }"
  >
    <div
      v-for="player in players"
      :key="player.name"
      class="piece-track__player"
      :style="{
        'grid-column-start': player.position[1] + 1,
        'grid-row-start':player.position[0] + 1,
        'background': player.color
      }"
    >{{ player.name.substring(0, 2).toUpperCase() }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  watch: {
    playerCurrentTile(newVal) {
      if (!newVal.revealed) {
        this.$store.dispatch('revealTile');
      }
    },
  },
  computed: {
    players() {
      return this.$store.state.players.players;
    },
    ...mapGetters([
      'boardWidth',
      'boardHeight',
      'playerCurrentTile',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.piece-track {
  pointer-events: none;
  position:absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: repeat(5, 300px);
  grid-gap: var(--spacing-lg);

  &__player {
    box-shadow: 0 1px 2px rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    font-family: var(--font-serif);
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
}

</style>
