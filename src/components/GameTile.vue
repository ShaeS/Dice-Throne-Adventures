<template>
    <div class="game-tile">
        <h3 class="game-tile__title">{{ tile.title }}</h3>
        <p class="game-tile__description">{{ tile.description }}</p>

        <div class="game-tile__enemy">
            <span>Enemy:</span>
            <EnemyIcon class="enemy-icon" :type="tile.enemyType" />
        </div>
        <div class="game-tile__boss-cp">
            <span>Boss:</span>
            <CPIcon class="cp-icon" :amount="tile.bossCP" />
        </div>
        <div class="game-tile__gold">
            <GoldIcon class="gold-icon" :amount="tile.gold" />
        </div>
    </div>
</template>

<script>
import GoldIcon from '../icons/GoldIcon.vue';
import CPIcon from '../icons/CPIcon.vue';
import EnemyIcon from '../icons/EnemyIcon.vue';

export default {
  components: {
    GoldIcon,
    CPIcon,
    EnemyIcon,
  },
  props: {
    tile: Object,
  },
};
</script>

<style lang="scss" scoped>
.game-tile {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background: var(--color-grey-800);
    border-radius: 8px;
    padding: var(--spacing-md);

    &__title {
        font-family: var(--font-serif);
    }

    &__enemy,
    &__boss-cp,
    &__gold {
        position: absolute;

        &::after {
            content: "";
            background: var(--color-grey-1000);
            position: absolute;
            left: -10px;
            right: -10px;
            top: 20%;
            bottom: 20%;
            transform: skewX(-20deg);
        }
    }

    .enemy-icon {
        width: 40px;
        z-index: 1;
        position: relative;
        margin-right: var(--spacing-xs);
    }

    &__enemy {
        display: flex;
        right: 0;
        top: 40%;

        span {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            color: white;
            font-weight: bold;
            font-size: 12px;
            position: relative;
            z-index: 1;
            margin-right: var(--spacing-xs);
        }

        &::after {
            transform: skewX(20deg);
        }
    }

    .cp-icon {
        width: 48px;
        z-index: 1;
        position: relative;
    }

    &__boss-cp {
        display: flex;
        right: 0;
        top: 20%;

        span {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            color: white;
            font-weight: bold;
            font-size: 12px;
            position: relative;
            z-index: 1;
        }

        &::after {
            background: rgb(187, 55, 55);
        }
    }

    .gold-icon {
        width: 40px;
        z-index: 1;
        position: relative;
    }

    &__gold {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        left: 0;
        top: 20%;
        width: 60px;
    }
}
</style>
