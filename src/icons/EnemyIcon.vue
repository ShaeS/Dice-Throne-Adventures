<template>
<div class="enemy-icon">
    <svg class="enemy-icon__svg" :class="{ green: type === 1, blue: type === 2, purple: type === 3 }" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M297 364l-30-30c-6-5-16-5-22 0l-30 30c-9 10-2 26 11 26h60c13 0 20-16 11-26zM166 180a75 75 0 1 0 0 150 75 75 0 0 0 0-150zm0 120c-25 0-45-20-45-45a45 45 0 0 1 90 0c0 25-20 45-45 45zM346 180a75 75 0 1 0 0 150 75 75 0 0 0 0-150zm0 120c-25 0-45-20-45-45a45 45 0 0 1 90 0c0 25-20 45-45 45z"/>
        <path d="M476 271A224 224 0 0 0 97 66c-54 54-77 130-61 205-6 18-7 37-1 56 9 31 36 55 68 61l12 1 6 1v58c0 18 11 34 27 41 25 11 64 23 108 23s83-12 108-23c16-7 27-23 27-41v-58l6-1 12-1c33-7 59-30 68-62 6-18 5-37-1-55zm-28 47c-6 21-23 36-46 41-12 0-10 2-23 0-9-2-18 5-18 14v75c0 6-3 11-9 14l-21 7v-32c0-8-7-15-15-15s-15 7-15 15v40l-30 4v-44c0-8-7-15-15-15s-15 7-15 15v44c-11 0-21-2-30-4v-40c0-8-7-15-15-15s-15 7-15 15v32l-21-7c-6-3-9-8-9-14v-75c0-9-9-16-18-14-13 3-10 0-24 0-22-5-39-20-45-41-4-13-4-27 1-40 2-3 2-6 1-9A194 194 0 0 1 256 30a194 194 0 0 1 190 239c-1 3-1 6 1 9 5 12 5 26 1 40z"/>
    </svg>
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
        border-radius: 50%;
        background: var(--color-grey-100);
        padding: var(--spacing-xxs);

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
