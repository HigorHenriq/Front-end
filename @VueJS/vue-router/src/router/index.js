import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'

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
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetails',
    component: JobsDetails,
    // DESSA FORMA É ACEITO AS PROPS VINDO POR PARAMETRO
    props: true
  },

  // REDIRECIONAMENTO DE ROTAS
  {
    // ANTIGO CAMINHO DA ROTA
    path: '/all-jobs',

    // PARA ONDE SERÁ REDIRECIONADO AO ENTRAR NA ANTIGA ROTA
    redirect: "/jobs"
  },

  // REDIRECINAMENTO GLOBAL
  {
    // METODO IRÁ PEGAR TODAS AS ROTAS QUE ESTIVEREM NESSE FILE E LANÇAR 404
    path: '/:catchAll(.*)',

    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
