var path = require('path')  //引入path模块

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 9527,     // 端口
  },
  lintOnSave: false,   // 取消 eslint 验证
  chainWebpack: function(config) {
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('@api',resolve('./src/request/api.js'))
    //set第一个参数：设置的别名，第二个参数：设置的路径　　
  },
  configureWebpack: (config)=>{
    if(process.env.NODE_ENV === 'production'){ // 上线后删除console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}