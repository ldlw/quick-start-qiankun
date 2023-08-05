<template>
  <div id="app">
    <Layout>
      <template v-if="!isChildApp">
        <router-view/>
      </template>
      <div v-show="isChildApp">
        <Skeleton v-show="microLoading" />
        <div id="child-container" v-show="!microLoading"></div>
      </div>
    </Layout>

  </div>  
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Skeleton from '@/components/skeleton.vue'
import { start } from 'qiankun'
import Layout from '@/layout/index.vue'
export default {
  name: "App",
  data() {
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
    Skeleton,
    Layout
  },
  methods: {
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
</style>
