import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {


constructor() { }

getAuth(): Auth {
  return getAuth();
}

register(user: User){
  return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
}

logIn(user:User){
  return signInWithEmailAndPassword(getAuth(), user.email, user.password);
}

logInGoogle(user:User){
  return signInWithPopup(getAuth(), new GoogleAuthProvider);
}

logOut(){
  return signOut(getAuth());
}

isAuthenticated(): boolean {
  const user = getAuth().currentUser;
  return user !== null;
}
}
