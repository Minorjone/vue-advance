let Vue
class Store {
  constructor (options) {
    this.state = new Vue({
      data: options.state
    })
  }
}

function install (_Vue) {
  Vue = _Vue
  Vue.mixins({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.state
      }
    }
  })
}

export default {
  Store
}