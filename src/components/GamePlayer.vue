<template>
  <div class="game-player">
    <div class="game-player__info">
      <div class="game-player__row">
        <div class="game-player__initials">
          <p :style="{color: player.color}">{{ player.name.substring(0,2).toUpperCase() }}</p>
        </div>
        <div class="game-player__movement">
          <div class="movement">
            <div
              :class="{ disabled: upDisabled }"
              @click="move('up', upDisabled)"
              class="movement__arrow movement__arrow--up"
            ></div>
            <div
              :class="{ disabled: downDisabled }"
              @click="move('down', downDisabled)"
              class="movement__arrow movement__arrow--down"
            ></div>
            <div
              :class="{ disabled: leftDisabled }"
              @click="move('left', leftDisabled)"
              class="movement__arrow movement__arrow--left"
            ></div>
            <div
              :class="{ disabled: rightDisabled }"
              @click="move('right', rightDisabled)"
              class="movement__arrow movement__arrow--right"
            ></div>
          </div>
        </div>
      </div>
      <p class="game-player__hero">{{ player.hero }}</p>
    </div>
    <div class="status-drawer" :class="{ open }">
      <div @click="open = !open" class="status-drawer__label" :style="{backgroundColor: player.color}">
        Status Effects
      </div>
      <div class="status-drawer__list">
        <StatusEffects :character="player" characterType="player" />
      </div>
    </div>
  </div>
</template>

<script>
import StatusEffects from './StatusEffects.vue';

export default {
  components: {
    StatusEffects,
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    player() {
      return this.$store.getters.playerInfo;
    },
    position() {
      return this.player.position;
    },
    boardTiles() {
      return this.$store.state.tiles.boardTiles;
    },
    upDisabled() {
      return this.checkTile(this.position[0] - 1, this.position[1]);
    },
    downDisabled() {
      return this.checkTile(this.position[0] + 1, this.position[1]);
    },
    leftDisabled() {
      return this.checkTile(this.position[0], this.position[1] - 1);
    },
    rightDisabled() {
      return this.checkTile(this.position[0], this.position[1] + 1);
    },
  },
  methods: {
    checkTile(pos1, pos2) {
      if (
        this.boardTiles.length > 1
        && this.boardTiles[pos1]
        && this.boardTiles[pos1][pos2]
      ) {
        return false;
      }
      return true;
    },
    move(direction, disabled) {
      if (!disabled) {
        this.$store.commit('setPlayerPosition', direction);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-player {
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;

  &__info {
    padding: var(--spacing-lg) var(--spacing-xxl) var(--spacing-sm);
    background: var(--color-grey-200);
  }

  &__row {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-md);
  }

  &__initials {
    line-height: 1.2;
    font-family: var(--font-serif);
    font-size: 72px;
    font-weight: 700;
    margin-right: var(--spacing-lg);
  }

  &__hero {
    font-size: 18px;
    text-align: center;
  }
}

.movement {
  position: relative;
  height: 88px;
  width: 88px;

  &__arrow {
    position: absolute;
    width: 0;
    height: 0;

    &--up {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-bottom: 20px solid var(--color-grey-900);

      &:active {
        border-bottom-color: var(--color-grey-1000);
      }

        &.disabled {
            border-bottom-color: var(--color-grey-400);
        }
    }

    &--down {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-top: 20px solid var(--color-grey-900);

      &:active {
        border-top-color: var(--color-grey-1000);
      }

      &.disabled {
            border-top-color: var(--color-grey-400);
        }
    }

    &--left {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-top: 14px solid transparent;
      border-bottom: 14px solid transparent;
      border-right: 20px solid var(--color-grey-900);

      &:active {
        border-right-color: var(--color-grey-1000);
      }

      &.disabled {
            border-right-color: var(--color-grey-400);
        }
    }

    &--right {
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border-top: 14px solid transparent;
      border-bottom: 14px solid transparent;
      border-left: 20px solid var(--color-grey-900);

      &:active {
        border-left-color: var(--color-grey-1000);
      }

      &.disabled {
            border-left-color: var(--color-grey-400);
        }
    }
  }
}

.status-drawer {
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  position: absolute;
  z-index: -1;
  left: -40px;
  top: 0;
  bottom: 0;
  display: flex;
  transition: transform 0.3s;

  &.open {
    transform: translateX(calc(-100% + 40px));
  }

  &__label {
    cursor: pointer;
    writing-mode: vertical-lr;
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  &__list {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-grey-400);
  }
}
</style>
