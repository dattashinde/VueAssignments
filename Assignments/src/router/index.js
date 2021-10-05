import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Weather from '../views/Weather.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/Projects',
    name: 'Projects',
    component:Projects
  },
  {
    path: '/Services',
    name: 'Services',
    component:Services
  },
  {
    path: '/Contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/Weather',
    name: 'Weather',
    component:Weather
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
