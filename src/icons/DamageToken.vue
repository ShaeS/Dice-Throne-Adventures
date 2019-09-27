<template>
  <div class="damage-token">
    <svg class="damage-token__svg" viewBox="0 0 455 455" xmlns="http://www.w3.org/2000/svg">
      <path d="M455 228l-39-51 8-63-59-24-23-59-63 9-52-40-50 39-63-9-24 60-59 23 8 63-39 52 39 50-9 63 60 24 23 59 63-9 51 39 51-39 62 9 24-59 59-24-8-63 40-50z"/>
    </svg>
    <p class="damage-token__amount">+{{ amount }}</p>
  </div>
</template>

<script>
export default {
  props: {
    amount: Number,
  },
};
</script>

<style lang="scss" scoped>
.damage-token {
  display: flex;
  align-items: center;
  justify-content: center;

  &__amount {
    color: white;
    font-weight: bold;
    font-weight: bold;
    position: absolute;

    span {
      font-size: 10px;
      color: rgb(138, 196, 199);
    }
  }

  &__svg {
    width: 100%;
    fill: var(--color-grey-1000);
  }
}
</style>
