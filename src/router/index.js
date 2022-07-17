import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      // MainLayout
      {
        path: "/",
        name: "MainLayout",
        component: () => import("@/layouts/MainLayout.vue")
      },
      // End MainLayout
  
      // AuthLayout
      {
        path: "/auth",
        name: "AuthLayout",
        component: () => import("@/layouts/AuthLayout.vue")
      }
      // End AuthLayout
    ]
  }
)

export default router