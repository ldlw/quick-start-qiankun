const { defineConfig } = require('@vue/cli-service')

const path = require('path')
const {
  name
} = require('./package')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'subAppA',
  publicPath: !isProduction ? './' : '/subAppA/', // ./相对路径
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式(必须)
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  },
  devServer: {
    port: 9001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // proxy: 'http://192.168.20.132:7002'
  }
})
