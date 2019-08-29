import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 引入axios
import axios from '@/core/network/index';

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
