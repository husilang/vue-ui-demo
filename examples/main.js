import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ZmUI from '../packages/index'
import demoBlock from './components/demo-block'

import "../packages/theme-chalk/src/index.scss"
import "./assets/common.css"

Vue.component('demo-block', demoBlock);
Vue.use(ZmUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
