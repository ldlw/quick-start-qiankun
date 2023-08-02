<template>
  <div id="app">
    <div class="test-block">
      <h5>sub-page-a导航块</h5>
      <button @click="handleJump">去子应用b</button>
      <h6>sub-page-a的子路由</h6>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App-A',
  components: {
  },
  data () {
    return {
    }
  },
  mounted() {
  },
  methods: {
    handleJump() {
      this.$postMessage({ type: 'TO_SUB_B' })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.test-block {
  background-color: pink;
  margin-bottom: 20px;
}
</style>
