
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';
import { GraficsComponent } from './components/grafics/grafics.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'home', component: HomeComponent },
  { path: 'fullCalendarComponent', component: FullCalendarComponent },
  { path: 'graficos', component: GraficsComponent },
  { path: '**', redirectTo: '/home' } // Ruta comodín para páginas no encontradas
];
