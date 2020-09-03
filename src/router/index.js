import Vue from 'vue'
import VueRouter from 'vue-router'
import { home, dog1, dog2, dog3 } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    props: true,
    children: [
      {
        path: 'dog1',
        component: dog1,
        name: 'dog1'
      },
      {
        path: 'dog2',
        component: dog2,
        name: 'dog2'
      },
      {
        path: 'dog3',
        component: dog3,
        name: 'dog3'
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
