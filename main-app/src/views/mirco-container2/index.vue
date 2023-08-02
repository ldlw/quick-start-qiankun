<template>
  <div class="micro-layout">
    <h5>下面是嵌入的子应用B</h5>
    <div>主应用的store: {{userInfo.name}} {{userInfo.age}}</div>
    <div>主应用设置store: 
      <button @click="setUser">
        设置userInfo
      </button>
    </div>
    <Skeleton v-show="microLoading" />
    <div id="child-container2" v-show="!microLoading"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {  } from 'vuex'
import { storeInstance } from '@/store'
import Skeleton from '@/components/skeleton.vue'
import { initMicroApp } from '@/micro-app'
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
    })
  },
  created () {

  },
  mounted () {
    if (!window.qiankunStarted2) {
      window.qiankunStarted2= true
      initMicroApp()
    }
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
    Skeleton
  }
}
</script>

<style scoped lang="less">
.micro-layout{
  // padding: 30px 0;
  #child-container2{
    width: 80%;
    border-top: solid #1890ff;
    box-sizing: border-box;
    margin: auto;
    box-shadow: rgba(0, 0, 0, .1) 0px 0px 20px 0px;
    background-color: white;
    padding: 40px 80px;
  }
}
</style>