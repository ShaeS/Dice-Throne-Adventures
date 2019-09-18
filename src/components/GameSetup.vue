<template>
  <div class="game-setup">
    <h3 class="game-setup__title">Choose Level</h3>
    <p>
        <input class="game-setup__radio" type="radio" id="level1" v-model="level" :value="1">
        <label for="level1">Level I</label>
    </p>
    <p>
        <input class="game-setup__radio" type="radio" id="level2" v-model="level" :value="2">
        <label for="level2">Level II</label>
    </p>

    <h3 class="game-setup__title">Choose Players</h3>
    <div class="game-setup__players">
        <div
            v-for="player in players"
            :key="player.name"
            class="game-setup__player"
            :style="{
                'background': player.color,
            }"
        >
            {{ player.name.substring(0, 2).toUpperCase() }}
        </div>
        <div class="game-setup__player">
            <PlusIcon class="game-setup__add-player" />
        </div>
    </div>

    <button @click="$emit('begin', level)" class="button button--primary">Begin Game</button>


    <GameModal v-if="modal" @close="modal = false" size="small">
      <AddPlayer />
    </GameModal>
  </div>
</template>

<script>
import PlusIcon from '../icons/PlusIcon.vue';
import GameModal from './GameModal.vue';
import AddPlayer from './AddPlayer.vue';

export default {
  components: {
    PlusIcon,
    GameModal,
    AddPlayer,
  },
  data() {
    return {
      level: 1,
      modal: false,
    };
  },
  computed: {
    players() {
      return this.$store.state.players.players;
    },
  },
};
</script>

<style lang="scss" scoped>
.game-setup {
    padding-top: var(--spacing-xxl);
    color: white;

    &__title {
        margin-top: var(--spacing-xxl);
        margin-bottom: var(--spacing-md);
    }

    &__radio {
        position: absolute;
        left: -9999px;

        + label {
            cursor: pointer;
            display: flex;
            align-items: center;
            position: relative;
            padding-left: var(--spacing-xl);
            margin-bottom: var(--spacing-sm);

            &:before,
            &:after {
                content: '';
                position: absolute;
                border-radius: 100%;
            }

            &:before {
                left: 0;
                width: 20px;
                height: 20px;
                background: #fff;
            }

            &:after {
                opacity: 0;
                width: 12px;
                height: 12px;
                background: var(--color-yellow);
                top: 4px;
                left: 4px;
            }
        }

        &:checked + label:after {
            opacity: 1;
        }
    }

    &__players {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: var(--spacing-xxl);
    }

    &__player {
        box-shadow: 0 1px 2px rgba(0,0,0,0.6);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        font-family: var(--font-serif);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        margin-right: var(--spacing-md);
        margin-bottom: var(--spacing-md);
        background: var(--color-grey-200);
    }

    &__add-player {
        width: 32px;
    }
}
</style>
