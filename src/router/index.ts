import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dosen',
      name: 'dosen',
      component: () => import('@/components/Dosen/DosenForm.vue')
    },
    {
      path: '/mahasiswa', // Path untuk route mahasiswa
      name: 'mahasiswa',
      component: () => import('@/components/Mahasiswa/MahasiswaForm.vue')
    },
    {
      path: '/ruangan',
      name: 'ruangan',
      component: () => import('@/components/Ruangan/RuanganForm.vue')
    }
  ]
})

export default router
