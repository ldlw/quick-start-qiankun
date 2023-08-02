<template>
  <div class="micro-app-skeleton">
    <el-skeleton animated v-if="$route.path === '/subPageA'">
      <template slot="template">
        <el-skeleton-item variant="rect" style="height: 250px; margin-bottom: 40px" />
        <div style="text-align: center;">
          <el-skeleton-item variant="button" style="width: 530px; height: 60px;" />
        </div>
        <div style="text-align: center;">
          <el-skeleton-item variant="text" style="width: 64px; height: 18px;margin-top: 10px;" />
        </div>
        <el-skeleton-item variant="rect" style="height: 60px; margin: 30px auto 20px" />
        <el-skeleton-item variant="rect" style="height: 150px; margin-bottom: 20px" />
        <el-skeleton-item variant="rect" style="height: 150px; margin-bottom: 20px" />
        <el-skeleton-item variant="rect" style="height: 150px; margin-bottom: 20px" />
      </template>
    </el-skeleton>
    <el-skeleton :rows="6" animated v-else>
      <template slot="template">
        <el-skeleton-item variant="rect" style="height: 75px; margin-bottom: 20px" />
        <el-skeleton-item variant="rect" style="height: 150px; margin-bottom: 20px" />
        <el-skeleton-item variant="rect" style="height: 150px; margin-bottom: 20px" />
        <el-skeleton-item variant="rect" style="height: 150px; margin-bottom: 20px" />
      </template>
    </el-skeleton>
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

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.form-container{
  display: flex;
  padding: 0px 40px;
  .form-img{
    width: 300px;
  }
  .form-wrap{
    padding: 20px 40px;
    width: 800px;
  }
}
.micro-app-skeleton{
  width: 80%;
  border-top: solid #1890ff;
  box-sizing: border-box;
  margin: auto;
  box-shadow: rgba(0, 0, 0, .1) 0px 0px 20px 0px;
  background-color: white;
  padding: 40px 80px;
}
</style>
