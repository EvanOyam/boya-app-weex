/* global Vue */
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Result from '@/views/Result'
import Home from '@/views/Home'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
