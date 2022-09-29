import {createRouter, createWebHistory } from 'vue-router'

// Task tracker app views
import Home from '../views/Home'
import Edit from '../views/Edit'
import About from '../views/About'

// Task tracker app routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/edit/',
        name: 'Edit',
        component: Edit,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

// Task tracker app router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
