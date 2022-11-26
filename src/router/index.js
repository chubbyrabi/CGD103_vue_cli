import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/trains',
    name: 'trains',
    component: () => import('../views/TrainsView.vue')
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('../views/TravelView.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/BookingView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
