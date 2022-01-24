import Vue from 'vue'
import App from './App.vue'
import { router, myRouter } from './router'

Vue.config.productionTip = false

new Vue({
  // router,
  myRouter,
  render: h => h(App)
}).$mount('#app')
