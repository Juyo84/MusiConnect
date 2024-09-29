import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Views/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./Views/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'log-in',
    loadComponent: () => import('./Views/log-in/log-in.page').then( m => m.LogInPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./Views/inicio/inicio.page').then( m => m.InicioPage)
  }


];
