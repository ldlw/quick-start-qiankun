<template>
  <div class="app-footer">
    Copyright © {{ currentDate }} qiankun-example by liuwei
  </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
    }
  },
  computed: {
    currentDate () {
      const date = new Date()
      return `2019 - ${date.getFullYear()}`
    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.app-footer {
  width: 100%;
  height: 100px;
  background: #002251;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>