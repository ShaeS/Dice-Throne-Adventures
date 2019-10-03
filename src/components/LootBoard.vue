<template>
  <div class="loot-board">
      <div class="loot-board__row">
        <div class="loot-board__icon"></div>
        <div class="loot-board__item" v-for="num in 20" :key="num">
            {{ num }}
        </div>
      </div>
      <div class="loot-board__row" v-for="(value, key) in tableData" :key="key">
        <TreasureIcon
          class="loot-board__icon"
          :level="parseInt(key)"
        />
        <div class="loot-board__item" v-for="(item, index) in value" :key="index">
            <component :is="formatLoot(item)"></component>
        </div>
      </div>
      <div class="loot-board__pickup">
        <h2 class="loot-board__pickup-title">Pick Up Loot</h2>
        <div class="loot-board__pickup-wrap">
          <CardIcon
            v-for="level in 4"
            :key="level"
            @click.native="drawLoot(level)"
            class="loot-board__pickup-icon"
            :level="level"
          />
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import tableData from '../decks/loot-table';
import TreasureIcon from '../icons/TreasureIcon.vue';
import CPIcon from '../icons/CPIcon.vue';
import HealthIcon from '../icons/HealthIcon.vue';
import GoldIcon from '../icons/GoldIcon.vue';
import CardIcon from '../icons/CardIcon.vue';
import DamageToken from '../icons/DamageToken.vue';


Vue.component('cp-icon', CPIcon);
Vue.component('health-icon', HealthIcon);
Vue.component('gold-icon', GoldIcon);
Vue.component('card-icon', CardIcon);
Vue.component('damage-token', DamageToken);


export default {
  components: {
    TreasureIcon,
    CardIcon,
  },
  data() {
    return {
      tableData,
    };
  },
  methods: {
    ...mapActions(['drawLoot']),
    formatLoot(string) {
      let html = '';
      if (string.includes('CP:')) {
        html = `<cp-icon :amount="${string.replace('CP: ', '')}" :hidePlus="true" />`;
      } else if (string.includes('health:')) {
        html = `<health-icon :amount="${string.replace('health: ', '')}" />`;
      } else if (string.includes('gold:')) {
        html = `<gold-icon :amount="${string.replace('gold: ', '')}" />`;
      } else if (string.includes('draw:')) {
        html = `<card-icon :amount="${string.replace('draw: ', '')}" />`;
      } else if (string.includes('loot:')) {
        html = `<card-icon :level="${string.replace('loot: ', '')}" />`;
      } else if (string.includes('dmg:')) {
        html = `<damage-token :amount="${string.replace('dmg: ', '')}" />`;
      }

      return {
        template: html,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.loot-board {
  background: var(--color-grey-100);

  &__row {
      display: flex;
      justify-content: space-between;
      padding: var(--spacing-sm);

      &:nth-child(even) {
          background: var(--color-grey-200);
      }

      &:first-child {
          background: var(--color-yellow);
          color: var(--color-grey-1000);
          font-weight: bold;
      }
  }

  &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 var(--spacing-xxs);
      width: 40px;
  }

   &__icon {
        width: 48px;
        margin: 0 var(--spacing-xxxs);
        margin-right: var(--spacing-lg);
  }

  &__pickup {
    width: 100%;
    background: var(--color-grey-200);
    padding: var(--spacing-lg) var(--spacing-xl);
    text-align: center;
  }
  &__pickup-wrap {
    max-width: 300px;
    margin: 0 auto;
    margin-top: var(--spacing-lg);
    display: flex;
    justify-content: center;
  }

  &__pickup-icon {
    cursor: pointer;
    width: 48px;
    margin: 0 var(--spacing-sm);
  }
}

</style>
