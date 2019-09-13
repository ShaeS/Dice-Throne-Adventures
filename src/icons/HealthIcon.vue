<template>
  <div class="health-icon">
    <svg class="health-icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <path
        d="M51.91 16.24C51.15 7.9 45.24 1.83 37.84 1.83c-4.93 0-9.45 2.65-11.99 6.9a13.48 13.48 0 0 0-11.7-6.9C6.76 1.83.86 7.89.1 16.24c-.06.37-.3 2.31.44 5.48a23.5 23.5 0 0 0 7.2 12.01l18.11 16.44 18.43-16.44a23.5 23.5 0 0 0 7.2-12.01c.75-3.17.5-5.1.44-5.48z"
      />
    </svg>
    <p class="health-icon__amount">{{ amount }}</p>
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
.health-icon {
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
    fill: var(--color-grey-900);
  }
}
</style>
