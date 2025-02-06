import { Component, OnInit } from '@angular/core';
import { Imembers } from '../../interfaces/imembers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  membersList: Imembers[] = [
    {
      id: 1,
      name: "Pepa",
      surname: "Flores",
      rol: "Directora",
      payroll: 3200,
  },
  {
    id: 2,
    name: "Roberto",
    surname: "García",
    rol: "Actor",
    payroll :2500,

}
  ]


  ngOnInit(): void {

  }


}
