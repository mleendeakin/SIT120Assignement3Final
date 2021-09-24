import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Seasons from '../views/Seasons.vue'
import Recipes from '../views/Recipes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/seasons',
    name: 'Seasons',
    component: Seasons
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
