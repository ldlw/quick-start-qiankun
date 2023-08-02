// 基座
export default {
  namespaced: true,
  state () {
    return {
      // 系统版本 ['Api', 'SaaS']
      cloudVersionName: 'SaaS',
      // 微服务加载状态
      microLoading: true
    }
  },
  mutations: {
    setMicroLoading (state, status) {
      state.microLoading = status
    }
  },
  actions: {
    setMicroLoading ({ commit }, status) {
      if (!status) {
        // 延迟占位 DOM 渲染的时间
        setTimeout(() => {
          commit('setMicroLoading', status)
        }, 500)
      } else {
        commit('setMicroLoading', status)
      }
    }
  }
}
