import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import loginPage from '../views/loginPage.vue'
import itemPage from '../views/itemPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path:'/login',
      component: loginPage,
    },

    {
      path: '/item',
      component: itemPage
    }
   
  ]
})

export default router
