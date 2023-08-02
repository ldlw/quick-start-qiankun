export default {
  namespaced: true,
  state () {
    return {
      userInfo: {
        name: 'lw',
        age: 3
      }
    }
  },
  getters: {
    getAge: (state, getters) => state.userInfo.age
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    handleLogin ({ commit }, postData) {

    }
  }   
}  