import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AsyncComputed from 'vue-async-computed'
import ToggleButton from 'vue-js-toggle-button'
 
Vue.use(ToggleButton)
Vue.config.productionTip = false
Vue.use(AsyncComputed);
new Vue({
  el:'#app',
  router,ToggleButton,
  store,
  render: function (h) { return h(App) }
})
// .$mount('#app')
// https://ypereirareis.github.io/blog/2017/04/25/vuejs-two-way-data-binding-state-management-vuex-strict-mode/
// https://www.npmjs.com/package/vue-localstorage