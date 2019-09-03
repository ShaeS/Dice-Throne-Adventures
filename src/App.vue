<template>
  <div id="app">
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from './components/GameBoard.vue';

export default {
  name: 'app',
  components: {
    GameBoard,
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
  height: 100vh;
  padding: var(--spacing-lg);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
