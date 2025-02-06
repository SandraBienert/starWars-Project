import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-crud-members',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './crud-members.component.html',
  styleUrl: './crud-members.component.css'
})
export class CrudMembersComponent {

}
