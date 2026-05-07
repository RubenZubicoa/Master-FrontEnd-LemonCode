import { Routes } from "@angular/router";
import { Home } from "../home/pages/home/home";
import { About } from "../about/pages/about/about";
import { Main } from "./pages/main/main";

export const routes: Routes = [
    {
        path: '',
        component: Main,
        children: [
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