import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import information from './views/information.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      
      component: function () { 
        return import('./views/About.vue')
      }
    },
    {
      path:'/information',
      name:'information',
      component: function () { 
        return import('./views/information.vue')
      }
    }
  ]
})
