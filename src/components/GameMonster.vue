<template>
  <div v-if="monster" class="monster">
    <div class="monster__stats">
      <div class="monster__stat">
        <MinusIcon @click.native="setMonsterHealth( -1 )" class="monster__increment" />
        <HealthIcon class="monster__stat-icon" :amount="monster.health" />
        <PlusIcon @click.native="setMonsterHealth( 1 )" class="monster__increment" />
      </div>
      <div class="monster__stat">
        <MinusIcon @click.native="setMonsterCP( -1 )" class="monster__increment" />
        <CPIcon class="monster__stat-icon" :amount="monster.CP" :hidePlus="true" />
        <PlusIcon @click.native="setMonsterCP( 1 )" class="monster__increment" />
      </div>
    </div>
    <div class="monster__left">
      <div class="monster__title-wrap">
        <EnemyIcon class="monster__level-icon" :type="monster.level" />
        <h2 class="monster__title">{{ monster.title }}</h2>
      </div>
      <div v-if="monster.additional" class="monster__line monster__line--additional">
        <p>{{ monster.additional }}</p>
      </div>
      <div v-if="monster.firstStrike" class="monster__line monster__line--first">
        <h4>First Strike</h4>
      </div>
      <div class="monster__line monster__line--reward">
        <h4>Reward:</h4>
        <TreasureIcon
          v-for="reward in monster.rewards"
          :key="reward"
          class="monster__icon"
          :level="reward"
        />
      </div>
      <div class="monster__line monster__line--roll">
        <h4>AI Roll Objective:</h4>
        <template v-if="Array.isArray(monster.rollObjective)">
          <MonsterDice
            class="monster__die"
            v-for="(die, i) in monster.rollObjective"
            :key="i"
            :range="die"
          />
        </template>
        <template v-else>{{ monster.rollObjective }}</template>
      </div>
    </div>
    <div class="monster__right">
      <div class="attacks">
        <div v-for="attack in monster.attacks" :key="attack.title">
          <h2 class="attacks__title">{{ attack.title }}</h2>
          <div class="attacks__rolls" v-for="(roll, i) in attack.rolls" :key="i">
            <div v-if="Array.isArray(roll.roll)" class="attacks__single">
              <MonsterDice
                class="attacks__die"
                v-for="(die, i) in roll.roll"
                :key="i"
                :range="die"
              />
              <p v-if="roll.description" class="attacks__roll-description">
                <component :is="formatDice(roll.description)"></component>
              </p>
            </div>
            <div v-else class="attacks__single--straight">
              <div class="attacks__straight">{{ roll.roll }}</div>
              <p v-if="roll.description" class="attacks__roll-description">
                <component :is="formatDice(roll.description)"></component>
              </p>
            </div>
          </div>
          <p v-if="attack.description" class="attacks__description">
            <component :is="formatDice(attack.description)"></component>
          </p>
        </div>
      </div>
      <div v-if="monster.passive" class="passive">
        <div class="passive__title">Passive</div>
        <div v-for="passive in monster.passive" :key="passive.description">
          <p class="passive__description">
            <component :is="formatDice(passive.description)"></component>
          </p>
        </div>
      </div>
      <div v-if="monster.defense" class="defense">
        <div v-for="defense in monster.defense" :key="defense.description">
          <div class="defense__title">Defense Roll {{ defense.dice }}</div>
          <div class="defense__description">
            <component :is="formatDice(defense.description)"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="monster__discard" v-if="monster.health < 1 || true">
      <button v-if="monster.health < 1" @click="discard" class="button">Discard Monster</button>
      <StatusEffects :statusList="monster.statusEffects" characterType="monster" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

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
    monster() {
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
    ...mapMutations(['setMonsterCP', 'setMonsterHealth', 'removeMonster']),
  },
};
</script>

<style lang="scss" scoped>
.monster {
  text-align: center;
  background: var(--color-grey-100);
  display: flex;
  flex-wrap: wrap;

  &__left {
    background: var(--color-grey-800);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__title-wrap {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-md) 0 var(--spacing-lg);
    background: var(--color-grey-1000);
    color: var(--color-grey-100);
    border-top: 8px solid var(--color-grey-900);
    transform: skewX(30deg);
    transform-origin: left bottom;
    margin-right: calc(-1 * var(--spacing-xl));
  }

  &__title {
    font-size: 20px;
    font-family: var(--font-serif);
    transform: skewX(-30deg);
    transform-origin: left bottom;
  }

  &__level-icon {
    width: 40px;
    margin-right: var(--spacing-md);
    transform: skewX(-30deg) scale(1.3);
  }

  &__line {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: var(--spacing-xs) var(--spacing-lg);

    h4 {
      margin-right: var(--spacing-xs);
    }

    &--reward {
      color: var(--color-grey-100);
      display: inline-flex;
      background: var(--color-grey-1000);
      margin-top: auto;
      margin-bottom: var(--spacing-sm);
    }

    &--first {
      color: var(--color-grey-100);
      display: inline-flex;
      background: var(--color-red);
      margin-top: var(--spacing-xxxl);
      border-radius: 50px 0 0 50px;
    }

    &--roll {
      background: var(--color-grey-100);
    }

    &--additional {
      align-self: center;
      width: 80%;
      background: var(--color-grey-100);
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: 0 0 10px 10px;
    }
  }

  &__icon {
    width: 28px;
    margin: 0 var(--spacing-xxxs);
  }

  &__die {
    margin-right: var(--spacing-xxs);
  }

  &__right {
    flex: 1;
    background: var(--color-grey-900);
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

  &__discard {
    width: 100%;
    background: var(--color-grey-200);
    text-align: center;
    padding: var(--spacing-md) var(--spacing-xl);
  }
}

.attacks {
  color: var(--color-grey-100);
  padding: var(--spacing-md) var(--spacing-xl) var(--spacing-xxxl);
  text-align: center;

  &__title {
    margin-bottom: var(--spacing-md);
  }

  &__description {
    margin-top: var(--spacing-md);
  }

  &__single {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: var(--spacing-xxs) 0;

    &--straight {
      margin-bottom: var(--spacing-md);
    }
  }

  &__straight {
    padding: var(--spacing-xxs) var(--spacing-lg);
    background: var(--color-grey-1000);
    border: 2px solid var(--color-grey-600);
    border-radius: 100px;
    display: inline-flex;
    margin-bottom: var(--spacing-xs);
  }

  &__die {
    margin: 0 var(--spacing-xxxs);
  }

  &__roll-description {
    margin-left: var(--spacing-xs);
    font-size: 13px;
  }
}

.passive {
  background: var(--color-dark-purple);
  color: var(--color-grey-100);
  padding: 0 var(--spacing-xl) var(--spacing-md);
  text-align: center;

  &__title {
    padding: var(--spacing-xxs) var(--spacing-lg);
    background: var(--color-grey-1000);
    border: 2px solid var(--color-grey-600);
    border-radius: 100px;
    display: inline-flex;
    transform: translateY(-50%);
  }
}

.defense {
  background: var(--color-dark-green);
  color: var(--color-grey-100);
  padding: var(--spacing-md) var(--spacing-xl);
  text-align: center;

  &__title {
    padding: var(--spacing-xxs) var(--spacing-lg);
    background: var(--color-grey-1000);
    border: 2px solid var(--color-grey-600);
    border-radius: 100px;
    display: inline-flex;
    margin-bottom: var(--spacing-sm);
  }
}
</style>
