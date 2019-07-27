// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移入移动端解决300ms触屏延时问题的依赖包文件
import fastClick from 'fastclick'
// 引入移动端重置css样式
import './assets/styles/reset.css'
// 移入移动端解决1px问题css样式文件
import './assets/styles/border.css'

Vue.config.productionTip = false
// 在document.body中绑定fastClick
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
