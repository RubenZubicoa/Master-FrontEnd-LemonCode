import Platos from './pages/platos.vue' 
import Favoritos from './pages/favoritos.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/platos',
    },
    {
        path: '/platos',
        name: 'platos',
        component: Platos,
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: Favoritos,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})