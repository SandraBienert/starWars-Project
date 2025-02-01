import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'home', component: HomeComponent }, // Define la ruta para 'home'
  { path: 'home/starship/:id', component: StarshipDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
