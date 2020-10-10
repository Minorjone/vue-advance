import Vue from 'vue'
import App from './App.vue'
import registerComponent from './components/global'
import create from './utils/create'
import KRouter from './KRouter'

Vue.config.productionTip = false
Vue.prototype.$create = create
registerComponent(Vue)

new Vue({
  router: KRouter, // 为了全局使用
  render: h => h(App),
}).$mount('#app')
