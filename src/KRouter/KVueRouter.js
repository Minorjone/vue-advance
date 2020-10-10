let Vue;
import View from './KRouterView'
import Link from './KRouterLink'
class KVueRouter {
  constructor (options) {
    this.$options = options

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
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 实现router-link和router-view组件
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default KVueRouter