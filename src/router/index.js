import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
    props: true,
    redirect: '/home/dog1',
    children: [
      {
        path: 'dog1',
        component: () => import('@/views/home/dog/dog1'),
        name: 'dog1',
        meta: { title: '西洋犬' }
      },
      {
        path: 'dog2',
        component: () => import('@/views/home/dog/dog2'),
        name: 'dog2',
        meta: { title: '哮天犬' },
        redirect: 'dog2/outerList',
        children: [
          {
            path: 'outerList',
            component: () => import('@/views/home/dog/dog2/outerList'),
            name: 'dog2outerList',
            meta: { title: '哮天犬', map: '/home/dog2', mustKeep: true }
          }, {
            path: 'detail',
            component: () => import('@/views/home/dog/dog2/detail'),
            name: 'dog2detail',
            meta: { title: '哮天犬', map: '/home/dog2' }
          }
        ]
      },
      {
        path: 'dog3',
        component: () => import('@/views/home/dog/dog3'),
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
