/* global Vue */
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Result from '@/views/Result'
import AdPage from '@/views/AdPage'

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
      path: '/adpage',
      name: 'AdPage',
      component: AdPage
    }
  ]
})
