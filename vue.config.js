// vue.config.js
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    // 输出文件路径
 
  publicPath: './',//打包后的位置(如果不设置这个静态资源会报404)
  outputDir: 'dist',//打包后的目录名称
  assetsDir: 'static',//静态资源目录名称
  // webpack-dev-server 相关配置
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  // pages: {
  //   index: {
  //     entry: './src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   },
  //   about: {
  //     entry: './src/main.js',
  //     template: 'public/about.html',
  //     filename: 'about.html'
  //   }
  // },
  devServer: {
    open: false, // 启动服务后是否打开浏览器
    // host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,

    // hotOnly: false,//是否支持热更新
    // proxy:
    //  {
    //         '/api':{

    //             target:'http://abc.com/',
                
    //             changeOrigin:true, //是否跨域
                
    //             pathRewrite:{
                
    //             '^/api':'' //规定请求地址以什么作为开头
                
    //             }
                
    //             }
    //     }, // 设置代理
    before: app => {}
  }
  
}
// .env.development
// VUE_APP_BASE_API='/api'