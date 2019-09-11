import Vue from 'vue';
import PortalVue from 'portal-vue';
import VTooltip from 'v-tooltip';
import App from './App.vue';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VTooltip);
Vue.use(PortalVue);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
