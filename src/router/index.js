import Vue from 'vue'
import VueRouter from 'vue-router'
//import Firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '/NotFound',
    component: () => import(/* webpackChunkName: "*" */ '../views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/ff1',
    name: 'FinalFantasyI',
    component: () =>
      import(/* webpackChunkName: "ff1" */'../views/Games/FF1.vue')
  },
  {
    path: '/ff2',
    name: 'FinalFantasyII',
    component: () =>
      import(/* webpackChunkName: "ff2" */'../views/Games/FF2.vue')
  },
  {
    path: '/ff3',
    name: 'FinalFantasyIII',
    component: () =>
      import(/* webpackChunkName: "ff3" */'../views/Games/FF3.vue')
  },
  {
    path: '/ff4',
    name: 'FinalFantasyVI',
    component: () =>
      import(/* webpackChunkName: "ff4" */'../views/Games/FF4.vue')
  },
  {
    path: '/ff5',
    name: 'FinalFantasyV',
    component: () =>
      import(/* webpackChunkName: "ff5" */'../views/Games/FF5.vue')
  },
  {
    path: '/ff6',
    name: 'FinalFantasyVI',
    component: () =>
      import(/* webpackChunkName: "ff6" */'../views/Games/FF6.vue')
  },
  {
    path: '/ff7',
    name: 'FinalFantasyVII',
    component: () =>
      import(/* webpackChunkName: "ff7" */'../views/Games/FF7.vue')
  },
  {
    path: '/ff8',
    name: 'FinalFantasyVIII',
    component: () =>
      import(/* webpackChunkName: "ff8" */'../views/Games/FF8.vue')
  },
  {
    path: '/ff9',
    name: 'FinalFantasyIX',
    component: () =>
      import(/* webpackChunkName: "ff9" */'../views/Games/FF9.vue')
  },
  {
    path: '/ff10',
    name: 'FinalFantasyX',
    component: () =>
      import(/* webpackChunkName: "ff10" */'../views/Games/FF10.vue')
  },
  {
    path: '/ff11',
    name: 'FinalFantasyXI',
    component: () =>
      import(/* webpackChunkName: "ff11" */'../views/Games/FF11.vue')
  },
  {
    path: '/ff12',
    name: 'FinalFantasyXII',
    component: () =>
      import(/* webpackChunkName: "ff12" */'../views/Games/FF12.vue')
  },
  {
    path: '/ff13',
    name: 'FinalFantasyXIII',
    component: () =>
      import(/* webpackChunkName: "ff13" */'../views/Games/FF13.vue')
  },
  {
    path: '/ff14',
    name: 'FinalFantasyXIV',
    component: () =>
      import(/* webpackChunkName: "ff14" */'../views/Games/FF14.vue')
  },
  {
    path: '/ff15',
    name: 'FinalFantasyXV',
    component: () =>
      import(/* webpackChunkName: "ff15" */'../views/Games/FF15.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
