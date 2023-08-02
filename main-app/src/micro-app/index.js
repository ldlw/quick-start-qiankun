import { registerMicroApps, start } from 'qiankun'
import store from '@/store'
import './global-state'
import { onMessage } from './receipt-notification'

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)

const microAppsList = [
  {
    name: 'subPageA',
    entry: process.env.VUE_APP_SUB_LOAN,
    container: '#child-container1',
    activeRule: getActiveRule('#/subPageA')
  },
  {
    name: 'subPageB',
    entry: process.env.VUE_APP_SUB_SUPPLY,
    container: '#child-container2',
    activeRule: getActiveRule('#/subPageB')
  }
]

const microApps = microAppsList.map(item => ({
  ...item,
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
  start({
    sandbox: false,
    prefetch: false
  })
}
