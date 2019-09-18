<template>
    <div class="status-effects">
        <div class="status-effects__list">
            <div v-tooltip.top-center="status.description" v-for="(status, index) in statusList" :key="status.title + index" class="status-effects__pill">
                {{ status.title }}
                <span class="status-effects__remove" @click="removeStatus({index, characterType})"><PlusIcon class="status-effects__remove-icon" /></span>
            </div>
        </div>
        <v-popover
            offset="16"
            popoverClass="add-status"
        >
            <button class="button">Add Status</button>

            <template slot="popover">
                <input class="add-status__input" placeholder="Search for Status" v-model="statusSearch" />

                <ul class="add-status__list">
                    <li v-close-popover @click="addStatus({status, characterType})" class="add-status__single" v-for="status in filteredStatus" :key="status.title">
                        <span>{{ status.title }}</span>
                        <span class="add-status__limit">Limit: {{ status.limit }}</span>
                    </li>
                </ul>
            </template>
        </v-popover>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import PlusIcon from '../icons/PlusIcon.vue';

export default {
  components: {
    PlusIcon,
  },
  props: {
    statusList: Array,
    characterType: String,
  },
  data() {
    return {
      statusSearch: '',
    };
  },
  computed: {
    ...mapState(['statusEffects']),
    filteredStatus() {
      return this.statusEffects.filter(option => option.title.toLowerCase().startsWith(this.statusSearch.toLowerCase()));
    },
  },
  methods: {
    ...mapMutations(['addStatus', 'removeStatus']),
  },
};
</script>

<style lang="scss" scoped>
.status-effects {
    height: 100%;
    width: 100%;
    padding: var(--spacing-md);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    &__pill {
        font-size: 13px;
        display: inline-block;
        background: var(--color-yellow);
        margin-right: var(--spacing-sm);
        margin-bottom: var(--spacing-sm);
        padding: var(--spacing-xxs) var(--spacing-sm);
        border-radius: 50px;
    }

    &__remove {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--color-grey-100);
        margin-left: var(--spacing-xs);
        border-radius: 50px;
        height: 16px;
        width: 16px;

        &:hover {
            background: var(--color-grey-1000);
        }

        &:hover &-icon {
            fill: var(--color-grey-100);
        }

        &-icon {
            height: 10px;
            width: 10px;
            fill: var(--color-grey-1000);
            transform: rotate(45deg);
        }
    }
}

.add-status {

    &__input {
        width: 100%;
        padding: var(--spacing-sm) var(--spacing-xs);
    }

    &__list {
        list-style-type: none;
        padding-left: 0;
        min-width: 280px;
        max-height: 280px;
        overflow-y: auto;
    }

    &__single {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        padding: var(--spacing-xs);

        &:nth-child(odd) {
            background: var(--color-grey-900);
        }

        &:hover {
            color: var(--color-yellow);
        }
    }

    &__limit {
        color: var(--color-grey-300);
        font-size: 12px;
    }
}
</style>
