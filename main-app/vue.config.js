module.exports = {
  transpileDependencies: ['common'],
  devServer: {
    port: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
