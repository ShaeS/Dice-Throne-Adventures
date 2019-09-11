<template>
<div class="enemy-icon">
    <svg class="enemy-icon__svg" :class="{ green: type === 1, blue: type === 2, purple: type === 3 }" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 300" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle cx="150" cy="150" r="150"/>
    </svg>
    <p class="enemy-icon__amount">{{ type }}</p>
</div>
</template>

<script>
export default {
  props: {
    type: Number,
  },
};
</script>

<style lang="scss" scoped>
    .enemy-icon {
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

            &.green {
                fill: var(--color-green);
            }
            &.blue {
                fill: var(--color-blue);
            }
            &.purple {
                fill: var(--color-purple);
            }
        }
    }
</style>
