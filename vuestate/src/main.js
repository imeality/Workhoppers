import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AsyncComputed from 'vue-async-computed'
import VueLocalStorage from 'vue-localstorage'
import  Axios  from  'axios'

Vue.config.productionTip = false

//const accessToken=localStorage.getItem('access_token')

Vue.use(VueLocalStorage)
Vue.use(AsyncComputed);
new Vue({
  el:'#app',
  router,
  VueLocalStorage,Axios,
  store,
  render: function (h) { return h(App) }
})
// .$mount('#app')
// https://ypereirareis.github.io/blog/2017/04/25/vuejs-two-way-data-binding-state-management-vuex-strict-mode/
// https://www.npmjs.com/package/vue-localstorage
https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index