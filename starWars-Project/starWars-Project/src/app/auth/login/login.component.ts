import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(@Inject(AuthService) private authService: AuthService, @Inject(Router) private router: Router) {}

  form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });

    onSubmit(){
      if(this.form.valid){
        this.authService.logIn(this.form.value as User)
        .then(resp =>{
          this.router.navigate(['/home'])
        })
        .catch(error => console.log(error));
      }
    }

    onClickGoogle(){
      this.authService.logInGoogle(this.form.value as User)
      .then(resp =>{
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
    }
}
