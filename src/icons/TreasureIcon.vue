<template>
  <svg
    :class="{ green: level === 1, blue: level === 2, purple: level === 3, orange: level === 4 }"
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <circle cx="256" cy="294" r="20" />
    <path
      d="M461 214l51-88v-15-2c0-13 1-52-25-78a82 82 0 0 0-61-23H86c-26 0-46 8-61 23C-1 57 0 96 0 109v17l51 88H0v290h512V214h-51zM53 59c8-7 18-11 33-11h340c15 0 25 4 33 11 8 8 11 21 12 32H41c1-11 4-24 12-32zm-4 72h414l-48 83H97l-48-83zm247 123v80h-80v-80h80zM40 464v-39c22 0 40 17 40 39H40zm432 0h-40c1-22 18-39 40-39v39zm0-79c-44 0-79 35-80 79H120c-1-44-36-79-80-79V254h136v120h160V254h136v131z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    level: Number,
  },
};
</script>

<style lang="scss" scoped>
.green {
  fill: var(--color-green);
}
.blue {
  fill: var(--color-blue);
}
.purple {
  fill: var(--color-purple);
}
.orange {
  fill: var(--color-orange);
}
</style>
