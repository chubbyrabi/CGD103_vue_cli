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
    path: '/news/:id',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
    // children: [
    //   {
    //     path: 'info',
    //     component: () => import('@/views/NewsInfo.vue')
    //   }
    // ]
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
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
