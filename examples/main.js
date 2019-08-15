import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ZmUI from '../packages/index'

import "./assets/common.css"

Vue.use(ZmUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
