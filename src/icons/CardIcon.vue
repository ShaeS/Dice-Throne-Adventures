<template>
    <div class="card-icon">
        <div class="card-icon__icon" :class="{ green: level === 1, blue: level === 2, purple: level === 3, orange: level === 4 }">
            {{ level ? '?' : amount }}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    amount: Number,
    level: Number,
  },
};
</script>

<style lang="scss" scoped>
.card-icon {
    width: 100%;
    display: flex;
    justify-content: center;

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        width: 100%;
        max-width: 28px;
        padding: var(--spacing-xs) 0;
        border: 3px solid var(--color-grey-900);
        border-top-width: 5px;
        border-left-width: 5px;
        border-radius: 6px;

        &.green {
            color: var(--color-grey-100);
            background: var(--color-green);
        }
        &.blue {
            color: var(--color-grey-100);
            background: var(--color-blue);
        }
        &.purple {
            color: var(--color-grey-100);
            background: var(--color-purple);
        }
        &.orange {
            color: var(--color-grey-100);
            background: var(--color-orange);
        }
    }

}
</style>
