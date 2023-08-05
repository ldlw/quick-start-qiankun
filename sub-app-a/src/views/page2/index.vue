<template>
  <div class="page2">
    <div class="desc">子应用A的page2嵌入第三方页面</div>
    <button @click="$router.go(-1)">返回上一页</button>
    <div>
      <iframe src="https://wujicode.cn/xy/app/prod/official/index" width="100%" height="500" frameborder="0" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'web-loan-service',
  components: {
  },
  data () {
    return {
      count: 1
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
.desc {
  font-size: 20px;
  font-weight: 600;
  margin: 30px 0;
}
button {
  padding: 0 10px;
  margin-bottom: 30px;
}
</style>
