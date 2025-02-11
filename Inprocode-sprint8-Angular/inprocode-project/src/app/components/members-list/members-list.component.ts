import { Component, OnInit } from '@angular/core';
import { Imembers } from '../../interfaces/imembers';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MembersService } from '../../services/members.service';
import { ProgressBarComponent } from '../../shared/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarComponent],
  // providers: [MembersService],
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})

export class MembersListComponent implements OnInit {
  membersList: Imembers[] = [];
  loading: boolean = false;

  constructor(private _membersService: MembersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListMembers();
  }

  getListMembers() {
      this.loading = true;
      this._membersService.getListMembers().subscribe({
        next: (data) =>{
          this.membersList = data;
          this.loading = false;
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        }
    })
  }

  deleteMember(id: number) {
    this.loading = true;
    this._membersService.deleteMember(id).subscribe(() =>{
      this.getListMembers();
      this.toastr.warning('Membre esborrat amb èxit!', 'Membre esborrat');
    })
  }

 }

