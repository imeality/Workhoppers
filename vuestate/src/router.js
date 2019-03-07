import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      path: '/Admin_login',
      name: 'Admin_login',
      
      component: function () { 
        return import('./views/Admin_login.vue')
      }
    },
    {
      path: '/Admin_dashboard',
      name: 'Admin_dashboard',
      
      component: function () { 
        return import('./views/Admin_dashboard.vue')
      }
    }
    
  ]
})
