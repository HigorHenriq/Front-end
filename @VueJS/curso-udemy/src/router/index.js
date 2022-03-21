import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import utilsStorage from "@/utils/storage";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Redirecionar o usuario caso não esteja logado
router.beforeEach((to, from) => {

  let estaLogado = utilsStorage.obterTokenStorage()

  if (to.meta.requiredAuth && !estaLogado) {
    return {
      path: '/login',
      query: { redirect: to.fullPath }

    }
  }
})

export default router
