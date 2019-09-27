<template>
    <div class="player-modal">
        <div class="player-modal__group">
            <label class="player-modal__label" for="name-field">Name</label>
            <input ref="input" type="text" id="name-field" v-model="name" />
        </div>

        <div class="player-modal__group">
            <label class="player-modal__label" for="hero-field">Hero</label>
            <select id="hero-field" v-model="hero">
                <option :value="{ hero: '', color: '' }" disabled>Choose a Hero</option>
                <option :value="{ hero: 'Barbarian', color: '#c71f16' }">Barbarian</option>
                <option :value="{ hero: 'Moon Elf', color: '#1b1091' }">Moon Elf</option>
                <option :value="{ hero: 'Monk', color: '#d59f80' }">Monk</option>
                <option :value="{ hero: 'Pyromancer', color: '#e8b730' }">Pyromancer</option>
                <option :value="{ hero: 'Paladin', color: '#66a1ee' }">Paladin</option>
                <option :value="{ hero: 'Shadow Thief', color: '#4f1091' }">Shadow Thief</option>
                <option :value="{ hero: 'Gunslinger', color: '#794628' }">Gunslinger</option>
                <option :value="{ hero: 'Samurai', color: '#e88c30' }">Samurai</option>
                <option :value="{ hero: 'Tactician', color: '#5c0a33' }">Tactician</option>
                <option :value="{ hero: 'Huntress', color: '#0a5c15' }">Huntress</option>
                <option :value="{ hero: 'Cursed Pirate', color: '#c7166f' }">Cursed Pirate</option>
                <option :value="{ hero: 'Seraph', color: '#30e8bd' }">Seraph</option>
                <option :value="{ hero: 'Vampire Lord', color: '#5c0e0a' }">Vampire Lord</option>
                <option :value="{ hero: 'Artificer', color: '#104891' }">Artificer</option>
                <option :value="{ hero: 'Treant', color: '#915110' }">Treant</option>
                <option :value="{ hero: 'Ninja', color: '#107c91' }">Ninja</option>
            </select>
        </div>

        <div class="player-modal__group">
            <label class="player-modal__label" for="name-field">Status Effects</label>
            <StatusEffects class="player-modal__status" :statusList="player.statusEffects" characterType="player" />
        </div>

        <button :disabled="name === '' || hero.hero === ''" @click="submit" class="button button--primary">Save Player</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

import StatusEffects from './StatusEffects.vue';

export default {
  components: {
    StatusEffects,
  },
  data() {
    return {
      name: '',
      hero: { hero: '', color: '' },
      statusEffects: [{
        title: 'Salve',
        description: 'Spend this token to heal one die of dmg. If used at the discovery of the boss, you may reroll the die one time.',
        limit: 1,
      }],
    };
  },
  created() {
    this.addPlayer(this.playerObj);
  },
  mounted() {
    console.log(this.$refs.input);
    this.$refs.input.focus();
  },
  computed: {
    player() {
      return this.$store.getters.playerInfo;
    },
    playerObj() {
      return {
        name: this.name,
        hero: this.hero.hero,
        position: [0, 0],
        color: this.hero.color,
        statusEffects: this.statusEffects,
        loot: [],
      };
    },
  },
  methods: {
    ...mapMutations(['addPlayer', 'editPlayer']),
    submit() {
      this.editPlayer(this.playerObj);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.player-modal {
    background: var(--color-grey-100);
    padding: var(--spacing-xxl) var(--spacing-xl);

    &__group {
        margin-bottom: var(--spacing-md);
    }

    &__label {
        display: block;
        margin-bottom: var(--spacing-xs);
    }

    input {
        width: 100%;
        max-width: 300px;
        padding: var(--spacing-sm) var(--spacing-xs);
    }

    select {
        width: 100%;
        max-width: 300px;
        padding: var(--spacing-sm) var(--spacing-xs);
    }

    &__status {
        align-items: flex-start;
        padding-left: 0;
        padding-right: 0;
    }
}
</style>
