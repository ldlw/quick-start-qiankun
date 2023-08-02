import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import mainApp from './modules/main-app'

Vue.use(Vuex)

const storeInstance = new Vuex.Store({
  // 注册模块
  modules: {
    user,
    mainApp
  },
  plugins: [
    createPersistedstate({
      key: 'main-app-store',
      // 需要缓存的模块
      paths: ['user'],
      storage: window.sessionStorage
    })
  ]
})

export default storeInstance
