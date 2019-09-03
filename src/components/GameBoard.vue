<template>
    <div class="game-board">
        <GameTile title="Title" :gold="1" :bossCP="2" :enemyType="1" description="Gain Wither" />
    </div>
</template>

<script>
import GameTile from './GameTile.vue';

export default {
  components: {
    GameTile,
  },
};
</script>

<style lang="scss" scoped>
.game-board {
    height: 100%;
    display: grid;
    grid-template-columns: repeat( 6, 300px );
    grid-template-rows: repeat( 5, 300px );
    grid-gap: var(--spacing-sm);
}
</style>
