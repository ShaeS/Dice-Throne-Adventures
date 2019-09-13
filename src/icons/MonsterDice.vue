<template>
    <div class="monster-dice" :class="{ 'monster-dice--inline': inline }">
        <div class="monster-dice__icon" :class="range === '1-3' ? 'circle' : range === '4-5' ? 'square' : 'triangle'"></div>
    </div>
</template>

<script>
export default {
  props: {
    range: String,
    inline: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.monster-dice {
    width: 32px;
    height: 32px;
    background: var(--color-grey-1000);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &--inline {
        margin: 0 var(--spacing-xxxs);
        display: inline-flex;
        width: 24px;
        height: 24px;

        .monster-dice__icon.triangle {
            border-left-width: 7px;
            border-right-width: 7px;
            border-bottom-width: 12px;
        }
    }

    &__icon {

        &.circle {
            width: 50%;
            height: 50%;
            background: var(--color-grey-100);
            border-radius: 50%;
        }

        &.square {
            width: 42%;
            height: 42%;
            background: var(--color-yellow);
            border-radius: 1px;
        }

        &.triangle {
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-bottom: 14px solid var(--color-red);
        }
    }
}
</style>
