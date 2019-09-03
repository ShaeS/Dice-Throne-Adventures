<template>
<div class="gold-icon">
    <svg class="gold-icon__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 300" xmlns:xlink="http://www.w3.org/1999/xlink">
        <polygon points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
    </svg>
    <p class="gold-icon__amount">{{ amount }}</p>
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
    .gold-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        &__amount {
            font-weight: bold;
            position: absolute;
        }

        &__svg {
            transform: rotate(30deg);
            width: 100%;
            fill: var(--color-yellow);
        }
    }
</style>
