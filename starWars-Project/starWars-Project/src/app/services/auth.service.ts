import { Inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

// import { Validations } from '../auth/validations/validations'; // Ensure the module exists at the specified path or update the path accordingly
// Ensure the module exists at the specified path or update the path accordingly


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    @Inject(Auth) private auth: Auth,
    private router: Router
  ) {
    this.auth.onAuthStateChanged((user) => {
      this.currentUserSubject.next(user);
    });
  }


}
