import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NavbarComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'inprocode-project';
}
