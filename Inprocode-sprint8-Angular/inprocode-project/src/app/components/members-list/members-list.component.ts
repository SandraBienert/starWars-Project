import { Component, OnInit } from '@angular/core';
import { Imembers } from '../../interfaces/imembers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { MembersService } from '../../services/members.service';
import { getMembers } from '../../../../../server/src/controllers/member';

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
      id: undefined,
      name: "Pepa",
      surname: "Flores",
      rol: "Directora",
      payroll: 3200,

    },
  {
    id: undefined,
    name: "Roberto",
    surname: "García",
    rol: "Actor",
    payroll :2500,
},
  ]


  constructor(private _membersService: MembersService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this._membersService.getMembers().subscribe((data)=> {
      console.log(data);
    })
  }
}
