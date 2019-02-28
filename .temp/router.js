import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }
  ]
})
