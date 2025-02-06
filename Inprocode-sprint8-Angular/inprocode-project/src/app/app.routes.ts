
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';
import { GraficsComponent } from './components/grafics/grafics.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { CrudMembersComponent } from './components/crud-members/crud-members.component';

export const routes: Routes = [

  { path: '', component: HomeComponent}, // Ruta por defecto
  { path: 'home', component: HomeComponent },
  { path: 'full-calendar', component: FullCalendarComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'grafics', component: GraficsComponent },
  { path: 'membres', component: MembersListComponent},
  { path: 'crud', component: CrudMembersComponent},
  { path: 'edit/:id', component: CrudMembersComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'  } // Ruta comodín para páginas no encontradas
];
