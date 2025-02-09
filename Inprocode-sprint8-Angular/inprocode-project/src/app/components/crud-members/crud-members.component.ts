import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Imembers } from '../../interfaces/imembers';
import { MembersService } from '../../services/members.service';
import { ProgressBarComponent } from "../../shared/progress-bar/progress-bar.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-members',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, ProgressBarComponent],
  templateUrl: './crud-members.component.html',
  styleUrl: './crud-members.component.css'
})
export class CrudMembersComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operation: string = 'Agregar ';
  private _memberService: any;

  constructor(private fb: FormBuilder,
    private _membersService: MembersService,
    private router: Router,
    private toastr : ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        rol:[ '', Validators.required],
        payroll: [null, Validators.required],
      });
      this.id = Number( aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id !== 0) {
      this.operation = 'Editar ';
      this._membersService.getMember(this.id).subscribe(data => {
        this.form.patchValue({
          name: data.name,
          surname: data.surname,
          rol: data.rol,
          payroll: data.payroll
        });
      });
    } else {
      this.operation = 'Agregar ';
    }
  }

  getMember(id: number) {
    this.loading = true;
    this._membersService.getMember(id).subscribe((data: Imembers) => {
    console.log(data);
    this.loading = false;
    this.form.setValue({
      name: data.name,
      surname: data.surname,
      rol: data.rol,
      payroll: data.payroll
    });
  });
  }

  addMember() {
    const member : Imembers = {
      id: undefined,
      name: this.form.get('name')?.value,
      surname: this.form.get('surname')?.value,
      rol: this.form.get('rol')?.value,
      payroll: this.form.get('payroll')?.value,
    }

    this.loading = true;

    if(this.id !== 0) {
      member.id = this.id;
      this._membersService.updateMember(this.id, member).subscribe(() => {
      this.toastr.info(`El membre ${member.name} ha estat actualitzat correctament`, `Membre actualitzat`);
      this.loading = false;
      this.router.navigate(['/members-list']);
});
    } else {
      this._membersService.saveMember(member).subscribe(() => {
      this.toastr.success(`El membre ${member.name} ha estat registrat correctament`, `Membre registrat`);
      this.loading = false;
      this.router.navigate(['/members-list']);
    });

  }


}
}
