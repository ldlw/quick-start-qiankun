<template>
  <div class="b">
    <div>
      <p>当前处于<code>{{ isInQiankun ? 'qiankun' : '独立运行'}}</code>环境</p>
      <p>基座下发的globalState：<code> {{ JSON.stringify(userInfo) }}</code></p>
    </div>
    <div class="btns">
      <template v-if="isInQiankun">
        <button @click="gotoSubA1">从当前子应用内跳转到子应用page1</button>
        <button @click="gotoSubA2">从当前子应用内跳转到子应用page2</button>
        <button @click="openSubB">独立打开子应用B子应用</button>
      </template>
      <button @click="setUser">{{ `改变${isInQiankun ? '全局': '当前'}` }}的用户年龄</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'page1',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: 'userInfo'
    }),
    isInQiankun () {
      return window.__POWERED_BY_QIANKUN__
    }
  },
  mounted() {
  },
  methods: {
    ...mapMutations({ 
     setUserInfo: 'user/setUserInfo'
    }),
    setUser () {
      this.setUserInfo({ 
        name: 'lw',
        age: this.userInfo.age + 1
      })
    },
    gotoSubA1 () {
      this.$postMessage({ type: 'TO_SUB_A1' })
    },
    gotoSubA2 () {
      this.$postMessage({ type: 'TO_SUB_A2' })
    },
    openSubB () {
      if (!this.isInQiankun) {
        alert('当前已经是单独运行的子应用')
        return
      }

      // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，
      // 谨慎使用，生产环境建议将跳转地址维护在环境变量中
      window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 20px;
  font-size: 18px;
}
.btns{
  margin: 100px;
}
.btns button{
  margin: 0 10px;
}
button {
  padding: 0 10px;
  font-size: 18px;
}
</style>
