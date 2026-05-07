import { Routes } from '@angular/router';
import { Login } from './login/pages/login/login';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        loadChildren: () => import('./layouts/layouts.routes').then(m => m.routes)
    }
];
