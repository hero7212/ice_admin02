const path = require('path');

module.exports = {
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  }
  // devServer: {
  //   open: true, //浏览器自动打开页面
  //   host: "0.0.0.0", //如果是真机测试，就使用这个IP
  //   port: 4444,
  //   https: false,
  //   hotOnly: false, //热更新（webpack已实现了，这里false即可）
  //   proxy: {
  //     //配置跨域
  //     '/api': {
  //         target: "http://114.115.170.134",
  //         ws:true,
  //         changOrigin:true
  //     }
  //   }
  // }
};
