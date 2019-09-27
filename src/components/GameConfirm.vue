<template>
    <div class="confirm">
        <h3>{{ text }}</h3>
        <button @click="$emit('confirm')" class="button button--success">Confirm</button>
        <button @click="$emit('close')" class="button">Cancel</button>
    </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.confirm {
    text-align: center;
    background: var(--color-grey-100);
    padding: var(--spacing-xl) var(--spacing-md);

    h3 {
        margin-bottom: var(--spacing-md);
    }

    .button {
        margin: 0 var(--spacing-xxs);
    }
}
</style>
