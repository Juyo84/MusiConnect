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
    path: 'compra',
    loadComponent: () => import('./Views/compra/compra.page').then( m => m.CompraPage)
  },
  {
    path: 'videos',
    loadComponent: () => import('./Views/videos/videos.page').then( m => m.VideosPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./Views/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./Views/perfil/perfil.page').then( m => m.PerfilPage)
  }



];
