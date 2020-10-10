import Vue from 'vue'

function create (Component, props) {
  // 1. vue.extend()
  // 2. render
  const vm = new Vue({
    render: h => h(Component, { props })
  }).$mount() // 不指定宿主元素，创建真实dom，但不追加Dom
  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]
  comp.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default create