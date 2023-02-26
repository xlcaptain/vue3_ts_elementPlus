import { createRouter, createWebHistory } from 'vue-router'
import routes from './modules.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  next()
  // return false
})

export default router
