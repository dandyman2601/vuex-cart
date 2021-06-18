import Vue from 'vue'
import App from './App.vue'

 import { router } from './Router/router'
 import { store } from './Store/store'


 Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})



Vue.config.productionTip = true

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app1')
