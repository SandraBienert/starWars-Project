import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MembersListComponent } from "./components/members-list/members-list.component";
import { CrudMembersComponent } from "./components/crud-members/crud-members.component";
import { HomeComponent } from "./components/home/home.component";




@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NavbarComponent, HomeComponent, MembersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'inprocode-project';
}
