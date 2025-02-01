import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './auth/register/register.component';


export const routes: Routes = [
  { path: 'welcome',
    canActivate:[authGuard],
    loadComponent: () => import('./components/welcome/welcome.component')
    .then(m => m.WelcomeComponent)
  },
  { path: 'register', loadComponent: () => import('./auth/register/register.component')
    .then(m => m.RegisterComponent)
  },
  { path: 'login', loadComponent: () => import('./auth/login/login.component')
    .then(m => m.LoginComponent)
  },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'home', component: HomeComponent }, // Define la ruta para 'home'
  { path: 'home/starship/:id', component: StarshipDetailComponent },

];
