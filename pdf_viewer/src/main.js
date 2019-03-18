import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueElementLoading from 'vue-element-loading'
 
Vue.component('VueElementLoading', VueElementLoading)
Vue.config.productionTip = false

new Vue({
  router,
  VueElementLoading,
  store,
  render: h => h(App)
}).$mount('#app')
