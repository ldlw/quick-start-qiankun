import Vue from 'vue'
import Vuex from 'vuex'
import lodash from 'lodash'
import user from './modules/user'
import cloneDeep from 'lodash/cloneDeep'

Vue.use(Vuex)

export let store = null

export function initStore (props = {}) {
  const QiankunDataSharePlugin = (store) => {
    const prevState = cloneDeep(store.state)
    // 当 store 初始化后调用,使用 vuex 插件去监听每一次的数据变化，将变化后的数据同步给父容器
    store.subscribe((mutation, state) => {
      const nextState = cloneDeep(state)
      if (!lodash.isEqual(prevState, nextState)) {
        props.setGlobalState &&
          props.setGlobalState({
            ...nextState
          })
      }
    })
  }
  store = new Vuex.Store({
    modules: {
      user
    },
    plugins: [
      QiankunDataSharePlugin
    ],
    ...(props.initStoreData || {})
  })

  // 主应用状态变化后，同步到微应用
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (state) => {
        store.replaceState({
          ...store.state,
          ...state
        })
      }, true
    )
  return store
}
