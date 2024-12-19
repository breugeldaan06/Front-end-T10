import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/infromation',
    name: 'infromation',
    // route level code-splitting
    // this generates a separate chunk (infromation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "infromation" */ '../views/InfromationView.vue')
  },
  {
    path: '/News',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (News.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "News" */ '../views/NewsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
