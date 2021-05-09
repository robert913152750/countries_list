import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Countries from '../views/Countries.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/countries'

  },
  {
    path: '/countries',
    name: 'countries',
    component: Countries
  },
  {
    path: '*',
    name: 'not_found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
