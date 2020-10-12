// 需求：
// 1.Vue插件形式存在
// 2.url变化页面不刷新，内容变化
// 3.实现两个全局组件router-link,router-view
// 4.数据响应式，url变化内容重新渲染，不需要额外的dom操作
// 5.路由嵌套

let Vue;
import View from './KRouterView'
import Link from './KRouterLink'
class KVueRouter {
  constructor (options) {
    Vue.util.defineReactive(this, 'current', '/')
    // this.app = new Vue({
    //   data () {
    //     return {
    //       current: '/'
    //     }
    //   }
    // })

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    this.routeMap = {}
    options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }

  onHashChange () {
    console.log(window.location.hash)
    this.current = window.location.hash.slice(1)
  }
}

KVueRouter.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) { // 确定根元素
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 实现router-link和router-view组件
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default KVueRouter