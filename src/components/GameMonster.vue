<template>
    <div class="monster">
      {{ monster.title }}
    </div>
</template>

<script>
export default {
  computed: {
    monster() {
      return this.$store.state.monsters.activeMonster;
    },
  },
};
</script>

<style lang="scss" scoped>
.monster {
  text-align: center;
  background: var(--color-grey-100);
  padding: var(--spacing-xl) var(--spacing-md);
}
</style>
