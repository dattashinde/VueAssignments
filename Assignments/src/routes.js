import { createWebHistory,createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Services from './components/Services.vue';
import Contact from './components/Contact.vue';


const routes = [
    {
        name : 'Home',
        path :'/',
        component : Home
    },
    {
        name : 'Projects',
        path :'/projects',
        component : Projects
    },
    {
        name : 'Services',
        path :'/services',
        component : Services
    },
    {
        name : 'Contact',
        path :'/contact',
        component : Contact
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;
