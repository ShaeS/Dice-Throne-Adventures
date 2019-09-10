<template>
  <div class="game-player">
      <div class="game-player__row">
          <div class="game-player__initials">
              <p>{{ player.name.substring(0,2).toUpperCase() }}</p>
          </div>
          <div class="game-player__movement">
              <div class="movement">
                  <div @click="move('up')" class="movement__arrow movement__arrow--up"></div>
                  <div @click="move('down')" class="movement__arrow movement__arrow--down"></div>
                  <div @click="move('left')" class="movement__arrow movement__arrow--left"></div>
                  <div @click="move('right')" class="movement__arrow movement__arrow--right"></div>
              </div>
          </div>
      </div>
      <p class="game-player__hero">
          {{ player.hero }}
      </p>
  </div>
</template>

<script>
export default {
  computed: {
    player() {
      return this.$store.getters.playerInfo;
    },
  },
  methods: {
    move(direction) {
      this.$store.commit('setPlayerPosition', direction);
    },
  },
};
</script>

<style lang="scss" scoped>
    .game-player {
        background: var(--color-grey-200);
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1;
        padding: var(--spacing-lg) var(--spacing-xxl) var(--spacing-sm);

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
            }
        }
    }
</style>
