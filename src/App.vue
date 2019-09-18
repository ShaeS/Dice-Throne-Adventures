<template>
  <div id="app">
    <GameSetup v-if="!gameActive" @begin="runSetup($event)" />
    <template v-else>
      <div ref="board" class="board-wrap">
        <GameBoard />
        <PieceTrack />
      </div>
      <GamePlayer />
      <SidebarInfo />
    </template>

    <transition name="fade">
      <portal-target name="modals"></portal-target>
    </transition>
  </div>
</template>

<script>
import panzoom from 'panzoom';
import { mapActions, mapMutations } from 'vuex';

import GameSetup from './components/GameSetup.vue';
import PieceTrack from './components/PieceTrack.vue';
import GameBoard from './components/GameBoard.vue';
import GamePlayer from './components/GamePlayer.vue';
import SidebarInfo from './components/SidebarInfo.vue';

export default {
  name: 'app',
  components: {
    GameSetup,
    PieceTrack,
    GameBoard,
    GamePlayer,
    SidebarInfo,
  },
  data() {
    return {
      setupModal: false,
    };
  },
  created() {
    if (this.players.length === 0) {
      this.setupModal = true;
    }
  },
  computed: {
    gameActive() {
      return this.$store.state.gameActive;
    },
    players() {
      return this.$store.state.players.players;
    },
  },
  methods: {
    ...mapMutations([
      'setGameActive',
    ]),
    ...mapActions([
      'chooseLevel',
      'pickTiles',
    ]),
    runSetup(level) {
      this.chooseLevel(level);
      this.pickTiles();
      this.setGameActive();
      this.$nextTick(() => {
        panzoom(this.$refs.board, {
          zoomSpeed: 0.1,
          maxZoom: 1.5,
          minZoom: 0.25,
          zoomDoubleClickSpeed: 1,
        }).zoomAbs(1000, -2000, 0.75);
      });
    },
  },
};
</script>

<style lang="scss">
:root {
  /* COLORS -- PRIMARY */
  --color-green: rgb(115, 197, 114);
  --color-dark-green: rgb(57, 92, 56);
  --color-blue: rgb(114, 161, 197);
  --color-purple: rgb(193, 114, 197);
  --color-dark-purple: rgb(95, 51, 97);
  --color-yellow: rgb(192, 153, 68);
  --color-red: rgb(165, 46, 46);

  --color-success: rgb(60, 162, 65);

  /* COLORS -- GREY */
  --color-grey-100: hsl(0, 0%, 97%);
  --color-grey-200: hsl(0, 0%, 88%);
  --color-grey-300: hsl(0, 0%, 81%);
  --color-grey-400: hsl(0, 0%, 69%);
  --color-grey-500: hsl(0, 0%, 62%);
  --color-grey-600: hsl(0, 0%, 47%);
  --color-grey-700: hsl(0, 0%, 35%);
  --color-grey-800: hsl(0, 0%, 28%);
  --color-grey-900: hsl(0, 0%, 19%);
  --color-grey-1000: hsl(0, 0%, 13%);

  /* SPACING */
  --spacing-xxxs: 2px;
  --spacing-xxs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-xxxl: 64px;
  --spacing-xxxxl: 96px;

  /* FONTS */
  --font-sans: "Roboto", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Roboto Slab", Baskerville, ‘Times New Roman’, Times, serif;
}

html,
body {
  height: 100vh;
  overflow: hidden;
  font-family: var(--font-sans);
  font-size: 16px;
  word-spacing: 1px;
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  background: var(--color-grey-1000);
}

#app {
  position: relative;
  height: 100vh;
  padding: var(--spacing-lg);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.vue-portal-target {
  position: relative;
  z-index: 99;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.button {
  cursor: pointer;
  display: inline-block;
  background: var(--color-grey-900);
  color: var(--color-grey-100);
  font-weight: bold;
  border: 0;
  font-size: 12px;
  padding: var(--spacing-sm) var(--spacing-md);
  outline: 0;

  &--large {
    width: 100%;
    display: block;
    font-size: 14px;
    padding: var(--spacing-md) var(--spacing-md);
  }

  &--primary {
    background: var(--color-yellow);
  }

  &--success {
    background: var(--color-success);
  }
}

.add-status {

  .tooltip-inner {
    padding: 0 !important;
  }
}

.tooltip {
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  max-width: 400px;
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: var(--color-grey-1000);
    color: white;
    border-radius: 4px;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: var(--spacing-xxs);
    border-color: var(--color-grey-1000);
  }

  &[x-placement^="top"] {
    margin-bottom: var(--spacing-xxs);

    .tooltip-arrow {
      border-width: var(--spacing-xxs) var(--spacing-xxs) 0 var(--spacing-xxs);
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -4px;
      left: calc(50% - var(--spacing-xxs));
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
