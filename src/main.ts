import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';

/* 引入Element-ui组件 */
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

/* 注入ElementUI，并初始化size和zIndex */
Vue.use(Element, { size: 'small', zIndex: 100 });

/* 注入全局组件 */

import '@/components/global/index';

// 引入axios
import axios from '@/core/network/index';

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
