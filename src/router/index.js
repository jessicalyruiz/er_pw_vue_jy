import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/materias/nueva',
    name: 'IngresarMateria',
    component: () => import(/* webpackChunkName: "IngresarMateria" */ '../views/CrearMateria.vue')
  },
  {
    path: '/materias',
    name: 'ConsultarMaterias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ConsultarMaterias" */ '../views/ConsultarMaterias.vue')
  },
  {
    path: '/materias/visua',
    name: 'verMateria',
    component: () => import(/* webpackChunkName: "verMateria" */ '../components/mostrarMateria.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})





export default router
