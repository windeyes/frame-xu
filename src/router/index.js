import Vue from 'vue'
import VueRouter from 'vue-router'
import { home, dog1, dog2, dog3 } from '../views'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
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
        name: 'dog1',
        meta: { title: '西洋犬' }
      },
      {
        path: 'dog2',
        component: dog2,
        name: 'dog2',
        meta: { title: '哮天犬' }
      },
      {
        path: 'dog3',
        component: dog3,
        name: 'dog3',
        meta: { title: '狂犬' }
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
