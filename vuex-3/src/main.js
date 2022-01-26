import Vue from 'vue'
import App from './App.vue'
import myStore from './store'

Vue.config.productionTip = false

new Vue({
  myStore,
  render: function (h) { return h(App) }
}).$mount('#app')
