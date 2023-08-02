<template>
  <div class="a">
    web-supply-service
    <br/>
    <br/>
    <button @click="handleJump">去子应用A</button>
    <br/>
    <br/>
    <button @click="handleJump2">去子应用A的二级路由</button>
    <br/>
    <br/>
    <div>子主应用的store: {{userInfo.age}}</div>
    <br/>
    <button @click="setUser">
      设置userInfo.age+1
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { store } from '@/store'
export default {
  name: 'web-supply-service',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: 'userInfo'
    })
  },
  mounted() {
  },
  methods: {
    handleJump() {
      this.$postMessage({ type: 'TO_SUB_A' })
    },
    handleJump2() {
      this.$postMessage({ type: 'TO_SUB_A2' })
    },
    setUser () {
      store.commit('user/setUserInfo', { 
        name: 'lw',
        age: this.userInfo.age + 1
      })
    }
  }
}
</script>
