<template>
    <div
        class="game-tile"
        :class="{
            'game-tile--face-down': !tile.revealed || tile.start,
            'game-tile--start': tile.start,
            green: tile.level === 1,
            blue: tile.level === 2,
            purple: tile.level === 3
        }"
    >   <slot></slot>
        <template v-if="tile.start">
            <h3>It begins...</h3>
        </template>
        <template v-else-if="tile.revealed">
            <h3 class="game-tile__title">{{ tile.title }}</h3>
            <p
                class="game-tile__description"
                :class="{
                    green: tile.level === 1,
                    blue: tile.level === 2,
                    purple: tile.level === 3
                }"
            >
                {{ tile.description }}
            </p>

            <div v-if="tile.enemyType" class="game-tile__enemy">
                <span>Enemy:</span>
                <EnemyIcon class="enemy-icon" :type="tile.enemyType" />
            </div>
            <div v-if="tile.bossCP" class="game-tile__boss-cp">
                <span>Boss</span>
                <CPIcon class="cp-icon" :amount="tile.bossCP" />
            </div>
            <div v-if="tile.playerCP" class="game-tile__cp">
                <CPIcon class="cp-icon--hero" :amount="tile.playerCP" />
                <span>Hero</span>
            </div>
            <div v-if="tile.gold" class="game-tile__gold">
                <GoldIcon class="gold-icon" :amount="tile.gold" />
            </div>
        </template>
        <template v-else>
            <h3>{{ tile.level === 1 ? 'I' : tile.level === 2 ? 'II' : 'III' }}</h3>
        </template>
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
    height: 100%;
    background: var(--color-grey-400);
    border-radius: 8px;
    padding-top: var(--spacing-md);

    &--face-down {
        padding-top: 0;
        justify-content: center;
        align-items: center;
        font-family: var(--font-serif);
        font-size: 42px;

        &.green {
            background: var(--color-green);
        }

        &.blue {
            background: var(--color-blue);
        }

        &.purple {
            background: var(--color-purple);
        }
    }

    &--start {
        padding-bottom: var(--spacing-md);
        justify-content: flex-end;
        font-size: 24px;
    }

    &__title {
        font-family: var(--font-serif);
        padding: 0 var(--spacing-md);
    }

    &__description {
        padding: var(--spacing-md);
        text-align: center;

        &.green {
            background: var(--color-green);
        }

        &.blue {
            background: var(--color-blue);
        }

        &.purple {
            background: var(--color-purple);
        }
    }

    &__enemy,
    &__boss-cp,
    &__cp,
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

    &__cp {
        display: flex;
        left: 0;
        top: 20%;

        span {
            margin-left: var(--spacing-xxs);
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
            background: rgb(65, 153, 47);
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
        top: 40%;
        width: 60px;
    }
}
</style>
