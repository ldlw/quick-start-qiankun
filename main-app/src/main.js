import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global/register-element'
import { initMicroApp } from '@/micro-app'

Vue.config.productionTip = false

export const vueInstance = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

initMicroApp()