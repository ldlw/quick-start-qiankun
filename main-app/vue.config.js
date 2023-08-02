const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'main-app',
  devServer: {
    port: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // proxy: 'http://192.168.20.132:7002'
  }
})
