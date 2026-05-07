import { Routes } from "@angular/router";
import { Main } from "./pages/main/main";

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('../home/pages/home/home').then(m => m.Home)
            },
            {
                path: 'about',
                loadComponent: () => import('../about/pages/about/about').then(m => m.About)
            }   
        ]
    },
];

export const PRIVATE_ROUTES: Routes = [
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('../dashboard/pages/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'profile',
                loadComponent: () => import('../profile/pages/profile/profile').then(m => m.Profile)
            },
            {
                path: 'galeria',
                loadComponent: () => import('../galeria/pages/galeria/galeria').then(m => m.Galeria)
            },
            {
                path: 'crud',
                loadComponent: () => import('../crud/pages/crud/crud').then(m => m.Crud)
            }
        ]
    }
];