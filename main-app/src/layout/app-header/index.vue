<template>
  <div class="app-header">
    <div class="logo">QIANKUN-EXAMPLE</div>
    <ul class="sub-apps">
      <nav>
        <router-link to="/home/">首页</router-link>
        <router-link to="/subPageA/">子应用A</router-link>
        <router-link to="/subPageB/">子应用B</router-link>
      </nav>
    </ul>
    <div class="userinfo">主应用的state：
      <span>{{ JSON.stringify(userInfo) }}</span>
      <button @click="setUser">
        年龄+1
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {

  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('mainApp', [
      'microLoading'
    ]),
    ...mapState('user', {
      userInfo: 'userInfo'
    }),
  },
  created () {

  },
  mounted () {
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
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.app-header {
  width: 100%;
  min-width: 1380px;
  height: 80px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  .logo {
    float: left;
    margin: 0 50px;
  }
  .sub-apps {
    nav {
      padding: 0;
      a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        margin-right: 40px;
      }
      .router-link-active{
        color: #42b983;
        text-decoration: underline;
      }
    }
  }
  .userinfo{
    position: absolute;
    right: 50px;
    top: 0;
    button {
      margin-left: 20px;
      padding: 0 10px;
    }
  }
}
</style>