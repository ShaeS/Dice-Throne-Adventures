<template>
<div class="boss">
    <div class="boss__stats">
        <div class="boss__stat">
            <MinusIcon @click.native="setMonsterHealth( -1 )" class="boss__increment" />
            <HealthIcon class="boss__stat-icon" :amount="boss.health" />
            <PlusIcon @click.native="setMonsterHealth( 1 )" class="boss__increment" />
        </div>
        <div class="boss__stat">
            <MinusIcon @click.native="decrementState( 'bossCP' )" class="boss__increment" />
            <CPIcon class="boss__stat-icon" :amount="bossCP" :hidePlus="true" />
            <PlusIcon @click.native="incrementState( 'bossCP' )" class="boss__increment" />
        </div>
    </div>
    <div class="boss__main">
        <div class="panels" :class="'panel-' + (i + 1)" v-for="(panel, i) in boss.panels" :key="panel.title">
            <div class="panels__attack" v-for="attack in panel" :key="attack.title">
                <h3 class="panels__title">{{ attack.title }}</h3>
                <div class="panels__rolls" v-for="(roll, i) in attack.rolls" :key="i">
                    <div v-if="Array.isArray(roll.roll)" class="panels__single">
                        <MonsterDice
                            class="panels__die"
                            v-for="(die, i) in roll.roll"
                            :key="i"
                            :range="die"
                            :inline="true"
                        />
                    </div>
                    <div v-else class="panels__single--straight">
                        <div class="panels__straight">{{ roll.roll }}</div>
                    </div>
                    <p v-if="roll.description" class="panels__roll-description">
                        <component :is="formatDice(roll.description)"></component>
                    </p>
                </div>
                <p v-if="attack.description" class="panels__description">
                    <component :is="formatDice(attack.description)"></component>
                </p>
            </div>
        </div>
        <div class="boss-ultimate">
            <StatusEffects :statusList="boss.statusEffects" characterType="monster" />
            <h2>{{ boss.title }}</h2>
            <div class="panels">
                <h3 class="panels__title">{{ boss.ultimate.title }}</h3>
                <div class="panels__rolls" v-for="(roll, i) in boss.ultimate.rolls" :key="i">
                    <div v-if="Array.isArray(roll.roll)" class="panels__single">
                        <MonsterDice
                            class="panels__die"
                            v-for="(die, i) in roll.roll"
                            :key="i"
                            :range="die"
                            :inline="true"
                        />
                        <p v-if="roll.description" class="panels__roll-description">
                            <component :is="formatDice(roll.description)"></component>
                        </p>
                    </div>
                    <div v-else class="panels__single--straight">
                        <div class="panels__straight">{{ roll.roll }}</div>
                        <p v-if="roll.description" class="panels__roll-description">
                            <component :is="formatDice(roll.description)"></component>
                        </p>
                    </div>
                </div>
                <p v-if="boss.ultimate.description" class="attacks__description">
                    <component :is="formatDice(boss.ultimate.description)"></component>
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Vue from 'vue';
import CPIcon from '../icons/CPIcon.vue';
import EnemyIcon from '../icons/EnemyIcon.vue';
import HealthIcon from '../icons/HealthIcon.vue';
import MinusIcon from '../icons/MinusIcon.vue';
import PlusIcon from '../icons/PlusIcon.vue';
import TreasureIcon from '../icons/TreasureIcon.vue';
import MonsterDice from '../icons/MonsterDice.vue';
import StatusEffects from './StatusEffects.vue';

Vue.component('monster-dice', MonsterDice);

export default {
  components: {
    EnemyIcon,
    HealthIcon,
    CPIcon,
    MinusIcon,
    PlusIcon,
    TreasureIcon,
    MonsterDice,
    StatusEffects,
  },
  computed: {
    ...mapState(['gold', 'bossCP']),
    boss() {
      return this.$store.state.monsters.activeMonster;
    },
  },
  methods: {
    formatDice(string) {
      let html = string.replace(/\[1-3\]/g, '<monster-dice range="1-3" :inline="true" />');
      html = html.replace(/\[4-5\]/g, '<monster-dice range="4-5" :inline="true" />');
      html = html.replace(/\[6\]/g, '<monster-dice range="6" :inline="true" />');
      return {
        template: `<span class="inline-dice">${html}</span>`,
      };
    },
    discard() {
      this.removeMonster();
      this.$emit('close');
    },
    ...mapMutations(['decrementState', 'incrementState', 'setMonsterCP', 'setMonsterHealth', 'removeMonster']),
  },
};
</script>

<style lang="scss" scoped>
.boss {
  text-align: center;
  background: var(--color-grey-100);
  display: flex;
  flex-wrap: wrap;

  &__main {
    background: var(--color-grey-1000);
    color: var(--color-grey-100);
    padding: var(--spacing-md);
    display: grid;
    grid-gap: var(--spacing-md);
    grid-template-rows: repeat(2, 360px);
    grid-template-columns: 1fr 1fr minmax(auto, 480px) 1fr 1fr;
    grid-template-areas:
    "panel-1 panel-2 center panel-3 panel-4"
    "panel-5 panel-6 center panel-7 panel-8";
  }

  &__stats {
    width: 100%;
    background: var(--color-grey-100);
    display: flex;
    justify-content: space-between;
    padding: var(--spacing-xs) var(--spacing-md);
  }

  &__stat {
    display: flex;
    justify-content: space-between;
  }

  &__stat-icon {
    width: 48px;
    margin: 0 var(--spacing-xs);
  }

  &__increment {
    width: 20px;
  }
}

.panels {
  background: var(--color-grey-900);
  padding: var(--spacing-md);
  text-align: center;
  border-radius: 8px;

  &__attack {
      margin-bottom: var(--spacing-lg);
  }

  &__title {
    margin-bottom: var(--spacing-xs);
  }

  &__description {
    margin-top: var(--spacing-sm);
  }

  &__single {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: var(--spacing-xxs) 0;
  }

  &__straight {
    padding: var(--spacing-xxs) var(--spacing-lg);
    background: var(--color-grey-1000);
    border: 2px solid var(--color-grey-600);
    border-radius: 100px;
    display: inline-flex;
  }

  &__die {
    margin: 0 var(--spacing-xxxs);
  }

  &__roll-description {
    margin-bottom: var(--spacing-sm);
    margin-top: var(--spacing-xxs);
    font-size: 13px;
  }
}

@for $i from 1 through 8 {
  .panel-#{$i} {
      grid-area: panel-#{$i};
  }
}

.boss-ultimate {
    grid-area: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h2 {
        font-size: 40px;
        margin-bottom: var(--spacing-md);
    }

    .status-effects {
        height: auto;
    }
}
</style>
