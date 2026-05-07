import { Routes } from '@angular/router';
import { Login } from './login/pages/login/login';
import { inject } from '@angular/core';
import { Auth } from './core/services/auth';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        canMatch: [() => inject(Auth).isAuthenticated() === false],
        loadChildren: () => import('./layouts/layouts.routes').then(m => m.PUBLIC_ROUTES)
    },
    {
        path: '',
        canMatch: [() => inject(Auth).isAuthenticated() === true],
        loadChildren: () => import('./layouts/layouts.routes').then(m => m.PRIVATE_ROUTES)
    }
];
