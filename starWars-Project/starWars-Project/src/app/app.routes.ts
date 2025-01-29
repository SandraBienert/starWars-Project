import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'home/starship/:id', component: StarshipDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
