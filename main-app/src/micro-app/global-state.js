import { initGlobalState } from 'qiankun'
import store from '@/store'

// 初始化 state
const actions = initGlobalState(store.state)

store.subscribe((mutation, state) => {
  actions.setGlobalState(state)
})
actions.onGlobalStateChange(
  (state) => {
    store.replaceState({
      ...store.state,
      ...state
    })
  }, true
)
