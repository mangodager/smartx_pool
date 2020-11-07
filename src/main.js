// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI);


// 响应拦截器
axios.interceptors.response.use(function (response) {
  // if (process.env.NODE_ENV === 'development' && response.data.code != 200) {
  //   console.warn("来自响应拦截器的警告：", "(code:" + response.data.code + ")" + response.data.msg);
  // }
  return response;
}, function (error) {
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
