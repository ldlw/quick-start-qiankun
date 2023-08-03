<template>
  <div id="app">
    <nav>
      <router-link to="/subPageA/">子应用A</router-link>|
      <router-link to="/subPageB/">子应用B</router-link>|
      <router-link to="/about/">关于我们</router-link>
    </nav>

    <div class="main-app-box">
      <div>主应用的store: {{userInfo.name}} {{userInfo.age}}</div>
      <div>主应用设置store: 
        <button @click="setUser">
          设置userInfo
        </button>
      </div>
    </div>

    <template v-if="!isChildApp">
      <router-view/>
    </template>
    <div v-else>
      <Skeleton v-show="microLoading" />
      <div id="child-container" v-show="!microLoading"></div>
    </div>
  </div>  
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Skeleton from '@/components/skeleton.vue'
import { start } from 'qiankun'
export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {
    ...mapState('mainApp', [
      'microLoading'
    ]),
    ...mapState('user', {
      userInfo: 'userInfo'
    }),
    isChildApp() {
      if(this.$route.path.match('subPageA') || this.$route.path.match('subPageB')){
        return true;
      }else{
        return false;
      }
    }
  },
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }  
  },
  beforeDestroy() {
  },
  components: {
    Skeleton
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
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: pink;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.router-link-active{
  color: #42b983;
}
.main-app-box {
  width: 80%;
  margin: 20px auto;
  border: 1px solid pink;
}
</style>
