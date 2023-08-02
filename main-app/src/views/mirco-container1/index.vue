<template>
  <div class="micro-layout">
    <h5>下面是嵌入的子应用容器A</h5>
    <Skeleton v-show="microLoading" />
    <div id="child-container1" v-show="!microLoading"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Skeleton from '@/components/skeleton.vue'
import { initMicroApp } from '@/micro-app'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('mainApp', [
      'microLoading'
    ])
  },
  mounted () {
    if (!window.qiankunStarted1) {
      window.qiankunStarted1 = true
      initMicroApp()
    }
  },
  watch: {

  },
  methods: {

  },
  components: {
    Skeleton
  }
}
</script>

<style scoped lang="less">
.micro-layout{
  // padding: 30px 0;
  #child-container1{
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
