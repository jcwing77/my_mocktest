import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import'mint-ui/lib/style.css'
import axiosPostForm from './axios/axios.post.form'
Vue.prototype.$axiosPostForm =  axiosPostForm;

const mock = true;
　　if(mock){
  　　require("./mock");
　　}
Vue.config.productionTip = false
// // 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// import './lib/mui/css/mui.css'
// // 导入 MUI 的样式表，扩展图标样式，购物车图标
// // 还需要加 载图标字体文件
// import './lib/mui/css/icons-extra.css'
// import "./font/iconfont.css"



//引入mint-ui 组件 Header
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//注册Header组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//引入 axios库
// import axios from "axios";
// //配置跨域访问保存session
// axios.defaults.withCredentials=true;
// //将axios库配置Vue实例对象中
// Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
