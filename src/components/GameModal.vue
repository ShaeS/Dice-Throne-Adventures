<template>
  <portal to="modals">
    <div class="modal is-active">
      <div @click="$emit( 'close' )" class="modal-background"></div>
      <div class="modal-content" :class="size">
        <slot></slot>
      </div>
      <button @click="$emit( 'close' )" class="modal-close is-large" aria-label="close">
        <PlusIcon />
      </button>
    </div>
  </portal>
</template>

<script>
import PlusIcon from '../icons/PlusIcon.vue';

export default {
  components: {
    PlusIcon,
  },
  props: ['size'],
  created() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.documentElement.style.overflow = 'visible';
  },
};
</script>


<style scoped lang="scss">
.modal {
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;

  &.is-active {
    display: flex;
  }
}

.modal-background {
  background-color: rgba(10, 10, 10, 0.86);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.modal-content {
  margin: 0 auto;
  max-height: calc(100vh - 40px);
  width: 640px;
  overflow: auto;
  position: relative;
}

.modal-close {
  width: 48px;
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  border: 0;
  fill: #fff;
  transform: rotate(45deg);
  outline: 0;
}

.modal-content.tiny {
  max-width: 220px;
}

.modal-content.small {
  max-width: 600px;
}

.modal-content.medium {
  max-width: 900px;
}

.widget-wrap {
    text-align: center;
  padding: var(--spacing-xl) var(--spacing-lg);
  background-color: var(--color-grey-100);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.04);
}
</style>
