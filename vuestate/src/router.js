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
      path: '/Admin_dash',
      name: 'Admin_dash',
      
      component: function () { 
        return import('./views/Admin_dash.vue')
      }
    }

  ]
})
