import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendarModule
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-full-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './full-calendar.component.html',
  styleUrl: './full-calendar.component.css'
})
export class FullCalendarComponent {

   // Opciones de configuración del calendario
    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Vista inicial: mes
    plugins: [dayGridPlugin, interactionPlugin, listPlugin], // Usa el plugin de vista de cuadrícula por días
    events: [
      { title: 'Evento 1', date: '2023-10-01' },
      { title: 'Evento 2', date: '2023-10-15' }
    ],
    dateClick: (arg) => { // Maneja clics en fechas
      alert('Fecha clickeada: ' + arg.dateStr);
    },
    eventClick: (info) => { // Maneja clics en eventos
      alert('Evento clickeado: ' + info.event.title);
    }
  };
}
