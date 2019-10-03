<template>
  <portal to="modals">
    <div class="modal is-active">
      <div @click="close" class="modal-background"></div>
      <div class="modal-content" :class="size">
        <slot></slot>
      </div>
      <button v-if="!disableClose" @click="close" class="modal-close is-large" aria-label="close">
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
  props: {
    size: String,
    disableClose: {
      default: false,
      type: Boolean,
    },
  },
  created() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.documentElement.style.overflow = 'visible';
  },
  methods: {
    close() {
      if (!this.disableClose) {
        this.$emit('close');
      }
    },
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
  width: calc(100% - var(--spacing-xxl));
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
  max-width: 300px;
}

.modal-content.small {
  max-width: 600px;
}

.modal-content.medium {
  max-width: 800px;
}

.modal-content.large {
  max-width: 1100px;
}
</style>
