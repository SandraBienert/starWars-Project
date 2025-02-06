import { Component, OnInit } from '@angular/core';
import { Imembers } from '../../interfaces/imembers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members-list',
  imports: [CommonModule],
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
    throw new Error('Method not implemented.');
  }


}
