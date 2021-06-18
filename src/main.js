import Vue from 'vue'
import App from './App.vue'

 import { router } from './Router/router'
 import { store } from './Store/store'


Vue.config.productionTip = true

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app1')
