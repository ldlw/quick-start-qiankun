<template>
  <div class="layout">
    <AppHeader></AppHeader>
    <div class="app-content">
      <slot>
      </slot>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from '@/layout/app-header/index.vue'
import AppFooter from '@/layout/app-footer/index.vue'
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
  methods: {
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang="less">
.layout {
  .app-content {
    min-height: calc(100vh - 180px);
    padding: 20px 0;
    box-sizing: border-box;
    width: 94%;
    margin: 0 auto;
  }
}
</style>