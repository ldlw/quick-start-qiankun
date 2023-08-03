import { registerMicroApps, start } from 'qiankun'
import store from '@/store'
import './global-state'
import { onMessage } from './receipt-notification'

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)

const microAppsList = [
  {
    name: 'subPageA',
    entry: process.env.VUE_APP_SUB_LOAN,
    activeRule: getActiveRule('#/subPageA')
  },
  {
    name: 'subPageB',
    entry: process.env.VUE_APP_SUB_SUPPLY,
    activeRule: getActiveRule('#/subPageB')
  }
]

const microApps = microAppsList.map(item => ({
  ...item,
  container: '#child-container',
  props: {
    initStoreData: store.state,
    postMessage: onMessage,
    mainWindow: window
  },
  loader: (status) => {
    store.dispatch('mainApp/setMicroLoading', status)
  }
}))

export const initMicroApp = () => {
  registerMicroApps(microApps)
  // 换到App.vue了
  // start({
  //   sandbox: false,
  // })
}
