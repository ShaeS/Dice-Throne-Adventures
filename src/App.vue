<template>
  <div id="app">
    <div ref="board" class="board-wrap">
      <GameBoard />
      <PieceTrack />
    </div>
    <GamePlayer />
    <SidebarInfo />

    <transition name="fade">
      <portal-target name="modals"></portal-target>
    </transition>
  </div>
</template>

<script>
import panzoom from 'panzoom';
import { mapActions } from 'vuex';

import PieceTrack from './components/PieceTrack.vue';
import GameBoard from './components/GameBoard.vue';
import GamePlayer from './components/GamePlayer.vue';
import SidebarInfo from './components/SidebarInfo.vue';

export default {
  name: 'app',
  components: {
    PieceTrack,
    GameBoard,
    GamePlayer,
    SidebarInfo,
  },
  mounted() {
    panzoom(this.$refs.board, {
      zoomSpeed: 0.1,
      maxZoom: 1.5,
      minZoom: 0.25,
      zoomDoubleClickSpeed: 1,
    }).zoomAbs(1000, -2000, 0.75);
    this.chooseLevel();
    this.pickTiles();
  },
  methods: {
    ...mapActions([
      'chooseLevel',
      'pickTiles',
    ]),
  },
};
</script>

<style lang="scss">
:root {
  /* COLORS -- PRIMARY */
  --color-green: rgb(115, 197, 114);
  --color-blue: rgb(114, 161, 197);
  --color-purple: rgb(193, 114, 197);
  --color-yellow: rgb(205, 169, 93);

  --color-success: rgb(60, 162, 65);

  /* COLORS -- GREY */
  --color-grey-100: hsl(0, 0%, 97%);
  --color-grey-200: hsl(0, 0%, 88%);
  --color-grey-300: hsl(0, 0%, 81%);
  --color-grey-400: hsl(0, 0%, 69%);
  --color-grey-500: hsl(0, 0%, 62%);
  --color-grey-600: hsl(0, 0%, 49%);
  --color-grey-700: hsl(0, 0%, 38%);
  --color-grey-800: hsl(0, 0%, 32%);
  --color-grey-900: hsl(0, 0%, 23%);
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

  &--success {
    background: var(--color-success);
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: var(--color-grey-1000);
    color: white;
    border-radius: 4px;
    padding: 4px 12px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 4px;
    border-color: var(--color-grey-1000);
  }

  &[x-placement^="top"] {
    margin-bottom: 4px;

    .tooltip-arrow {
      border-width: 4px 4px 0 4px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -4px;
      left: calc(50% - 4px);
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
