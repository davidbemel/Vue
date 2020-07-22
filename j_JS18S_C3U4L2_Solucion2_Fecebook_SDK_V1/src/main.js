import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App)
})
vm.$mount('#app')
