const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8088
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@page', resolve('src/components/pages'))
  }
}
