/* global Vue */
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Result from '@/views/Result'
import AdPage from '@/views/AdPage'
import Index from '@/views/Index'
import Test from '@/views/Test'
import Login from '@/views/Login'
import Booking from '@/views/Booking';

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
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    }
  ]
})
