import { Routes } from "@angular/router";
import { Home } from "../home/pages/home/home";
import { About } from "../about/pages/about/about";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    }
];