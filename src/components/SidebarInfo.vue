<template>
  <div class="sidebar" :class="{ open }">
    <div class="sidebar__line">
      <h3>Gold:</h3>
      <MinusIcon @click.native="decrementState( 'gold' )" class="sidebar__increment" />
      <GoldIcon class="sidebar__icon" :amount="gold" />
      <PlusIcon @click.native="incrementState( 'gold' )" class="sidebar__increment" />
    </div>
    <div class="sidebar__line">
      <h3>Boss CP:</h3>
      <MinusIcon @click.native="decrementState( 'bossCP' )" class="sidebar__increment" />
      <CPIcon class="sidebar__icon" :amount="bossCP" :hidePlus="true" />
      <PlusIcon @click.native="incrementState( 'bossCP' )" class="sidebar__increment" />
    </div>
    <div class="sidebar__line">
      <button @click="spawnModal = true" class="button button--large">Spawn Monster</button>
    </div>
    <template v-if="monsters.length">
      <h3 class="sidebar__monster-title">Current Monsters</h3>
      <div class="sidebar__line">
        <EnemyIcon
            v-for="monster in monsters"
            :key="monster.title"
            v-tooltip.top-center="monster.title"
            class="sidebar__monster"
            :type="monster.level"
            @click.native="openMonster(monster)"
          />
      </div>
    </template>
    <div @click="open = !open" class="sidebar__toggle">
      <SettingsIcon />
    </div>

    <GameModal v-if="spawnModal" @close="spawnModal = false" size="tiny">
      <div class="monster-select">
        <EnemyIcon
        v-for="level in 3"
        :key="level"
        @click.native="spawnMonster(level)"
        class="monster-select__icon"
        :type="level"
      />
      </div>
    </GameModal>

    <GameModal v-if="monsterModal" @close="closeMonster" size="medium">
      <GameMonster />
    </GameModal>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import GoldIcon from '../icons/GoldIcon.vue';
import CPIcon from '../icons/CPIcon.vue';
import EnemyIcon from '../icons/EnemyIcon.vue';
import MinusIcon from '../icons/MinusIcon.vue';
import PlusIcon from '../icons/PlusIcon.vue';
import SettingsIcon from '../icons/SettingsIcon.vue';
import GameModal from './GameModal.vue';
import GameMonster from './GameMonster.vue';

export default {
  components: {
    SettingsIcon,
    GoldIcon,
    CPIcon,
    EnemyIcon,
    MinusIcon,
    PlusIcon,
    GameModal,
    GameMonster,
  },
  data() {
    return {
      open: true,
      spawnModal: false,
      monsterModal: false,
    };
  },
  computed: {
    ...mapState(['gold', 'bossCP']),
    monsters() {
      return this.$store.state.monsters.monsters;
    },
  },
  methods: {
    spawnMonster(level) {
      this.drawMonster(level);
      this.spawnModal = false;
      this.monsterModal = true;
    },
    openMonster(monster) {
      this.setActiveMonster(monster);
      this.monsterModal = true;
    },
    closeMonster() {
      this.monsterModal = false;
      this.unsetActiveMonster();
    },
    ...mapMutations(['decrementState', 'incrementState', 'setActiveMonster', 'unsetActiveMonster']),
    ...mapActions(['drawMonster']),
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
  padding: var(--spacing-xl);
  transform: translateX(-100%);
  transition: transform 0.3s;

  &.open {
    transform: translateX(0);
  }

  &__toggle {
    background: var(--color-grey-400);
    padding: var(--spacing-xxs);
    position: absolute;
    top: 0;
    left: 100%;
    width: 48px;
  }

  &__line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: var(--spacing-xl);

    h3 {
      font-family: var(--font-serif);
      margin-right: var(--spacing-md);
    }
  }

  &__monster-title {
    font-family: var(--font-serif);
    margin-bottom: var(--spacing-xs);
  }

  &__monster {
    cursor: pointer;
    width: 44px;
    margin-left: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
  }

  &__icon {
    margin: 0 var(--spacing-xs);
    width: 48px;
  }

  &__increment {
    width: 20px;
  }
}

.monster-select {
  background: var(--color-grey-100);
  padding: var(--spacing-xl) var(--spacing-md);
  display: flex;
  justify-content: space-between;

  &__icon {
    cursor: pointer;
    width: 48px;
  }
}
</style>
