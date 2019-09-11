<template>
  <div class="sidebar" :class="{ open }">
      <div class="sidebar__toggle"><SettingsIcon /></div>
  </div>
</template>

<script>
import SettingsIcon from '../icons/SettingsIcon.vue';

export default {
  components: {
    SettingsIcon,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    background: var(--color-grey-300);
    transform: translateX(-60%);

    &.open {
        transform: translateX(0);
    }

    &__toggle {
        background: var(--color-grey-400);
        padding: var(--spacing-sm);
        position: absolute;
        top: 0;
        left: 100%;
        width: 80px;
    }
}
</style>
