import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mvp-home',
      component: () => import('@/views/Mvp.vue')
    },
  ]
})

export default router
