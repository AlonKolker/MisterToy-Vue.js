import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ToysApp from '../views/toys-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/toys',
      name: 'toysApp',
      component: ToysApp
    },
    {
      path: '/toys/:_id',
      name: 'toy-details',
      component: toyDetails
    },
    {
      path: '/toys/edit/:_id?',
      name: 'toy-edit',
      component: toyEdit,
    },
  ]
})

export default router
