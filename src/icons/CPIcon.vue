<template>
  <div class="cp-icon">
    <svg
      class="cp-icon__svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 300 300"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <polygon points="150,0 300,260 0,260" />
    </svg>
    <p class="cp-icon__amount">
      <template v-if="!hidePlus">+</template>
      {{ amount }}
      <span>CP</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    amount: Number,
    hidePlus: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.cp-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  &__amount {
    color: white;
    font-weight: bold;
    display: flex;
    align-items: baseline;
    position: absolute;

    span {
      display: inline-block;
      font-size: 10px;
      color: rgb(138, 196, 199);
      margin-bottom: var(--spacing-xxs);
    }
  }

  &__svg {
    transform: rotate(90deg);
    width: 100%;
    fill: rgb(36, 120, 125);
  }
}
</style>
