import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Imembers } from '../../interfaces/imembers';

@Component({
  selector: 'app-crud-members',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './crud-members.component.html',
  styleUrl: './crud-members.component.css'
})
export class CrudMembersComponent implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      rol:[ '', Validators.required],
      payroll: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  addMember() {

  const member : Imembers = {
    name: this.form.get('name')?.value,
    surname: this.form.get('surname')?.value,
    rol: this.form.get('rol')?.value,
    payroll: this.form.get('payroll')?.value,
    id: undefined,
    //console.log(this.form.value)
  //console.log(this.form.get('name')?.value);
  }
  }
}
