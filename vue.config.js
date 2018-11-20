const webpack = require('webpack')
// 获取编译环境
const build_env = process.env.ENV || "prod"
const build_var = require(`./src/env/${build_env}.env`)
// 自定义SERVER
if (process.env.server) {
  build_var['URL']['SERVER'] = JSON.stringify(`http://${process.env.server}`)
}
// 传递环境变量
const build_define = Object.assign({
  NODE_ENV: build_env === "prod" ? '"production"' : '"development"', // 编译模式
  BUILD_ENV: JSON.stringify(build_env), // 编译环境
  BUILD_TIME: JSON.stringify(new Date().toLocaleString()) // 编译时间
}, build_var)

module.exports = {
  runtimeCompiler: true,

  // 修改webpack配置
  chainWebpack: config => {
    // 修改环境变量插件
    config
      .plugin('define')
      .init((Plugin, args) => new webpack.DefinePlugin({
        'process.env': Object.assign({
          BASE_URL: "'/'",
          NODE_ENV: "'development'",
        }, build_define)
      }))
  }
}