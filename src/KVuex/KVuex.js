// 需求：
// 1.Vue插件形式存在
// 2.单向数据流，响应式状态更新
// 3.明确获取全局状态
// 4.只能由store修改状态

let Vue
class Store {
  constructor (options) {
    this._mutations = options.mutations
    this._actions = options.actions

    // 用户可以修改state的值
    // this.state = new Vue({
    //   data: options.state
    // })

    this._vm = new Vue({
      data: {
        $$state: options.state // 加两个$，vue不做代理
      }
    })

    //绑定commit， dispatch的上下文到store实例
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state () {
    return this._vm._data.$$state
  }

  set state (v) {
    console.error('不可直接修改state')
  }

  // type: mutations的类型
  // payload: 载荷，是参数
  commit (type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch (type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
  }
}

function install (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}