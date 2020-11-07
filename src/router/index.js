import Vue from 'vue'
import Router from 'vue-router'
import errorPage from '@/components/errorPage'

import Home from '@/view/Home' //首页


// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/errorPage',
    name: 'errorPage',
    component: errorPage
  }]
})
