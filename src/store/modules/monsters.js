import GameMonsters from '../../decks/monsters';
import FallenBarbarian from '../../decks/boss/barbarian';
import { shuffle, draw } from './utilities';

const initialState = {
  deck: GameMonsters,
  activeMonster: null,
  monsters: [],
  boss: false,
};

export default {
  state: { ...initialState },
  mutations: {
    setMonsterDeck(state, payload) {
      state.deck = payload;
    },
    addMonster(state, payload) {
      state.monsters.push(payload);
    },
    removeMonster(state) {
      const index = state.monsters.findIndex(mon => mon.title === state.activeMonster.title && mon.health === 0);
      state.monsters.splice(index, 1);
    },
    setActiveMonster(state, payload) {
      if (payload.level) {
        state.boss = false;
      } else {
        state.boss = true;
      }
      state.activeMonster = payload;
    },
    unsetActiveMonster(state) {
      state.activeMonster = null;
    },
    setMonsterCP(state, payload) {
      const newCP = state.activeMonster.CP + payload;
      state.activeMonster.CP = newCP;
    },
    setMonsterHealth(state, payload) {
      const newHealth = state.activeMonster.health + payload;
      state.activeMonster.health = newHealth;
    },
    resetMonsterState(state) {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
    setBoss(state, payload) {
      state.boss = payload;
    },
  },
  actions: {
    drawMonster({ state, commit }, level) {
      const shuffledDeck = shuffle(state.deck);
      const { card, deck } = draw(shuffledDeck, level);
      commit('setBoss', false);
      commit('setMonsterDeck', deck);
      commit('addMonster', card);
      commit('setActiveMonster', card);
    },
    spawnBoss({ commit, dispatch }) {
      commit('setBoss', true);
      dispatch('upgradeBoss');
    },
    upgradeBoss({ commit, rootState }) {
      const boss = { ...FallenBarbarian };
      const shuffledUpgrades = shuffle(boss.upgrades);
      shuffledUpgrades.forEach((upgrade) => {
        if (rootState.bossCP >= upgrade.cost) {
          const panelIndex = boss.panels.findIndex((panel) => {
            if (panel[0].title.replace(' II', '').replace(' III', '') === upgrade.base) {
              return panel;
            }
            return null;
          });
          boss.panels.splice(panelIndex, 1, upgrade.new);
          for (let i = 0; i < upgrade.cost; i++) {
            commit('decrementState', 'bossCP');
          }
        } else {
          commit('incrementState', 'bossCP');
        }
      });
      commit('addMonster', boss);
      commit('setActiveMonster', boss);
    },
  },
};
