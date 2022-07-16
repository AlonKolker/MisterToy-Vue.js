import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import ToysApp from "../views/toys-app.vue"
import toyDetails from "../views/toy-details.vue"
import toyEdit from "../views/toy-edit.vue"
import toyChart from "../views/toy-chart.vue"
import about from "../views/about.vue"
import login from "../views/login.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/toy",
      name: "toysApp",
      component: ToysApp,
    },
    {
      path: "/toy/:_id",
      name: "toy-details",
      component: toyDetails,
    },
    {
      path: "/toy/edit/:_id?",
      name: "toy-edit",
      component: toyEdit,
    },
    {
      path: "/toyChart",
      name: "toy-chart",
      component: toyChart,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
  ],
})

export default router
