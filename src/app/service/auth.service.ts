import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import firebase from "firebase/compat";
import {Auth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = false;




  constructor(private fireauth: AngularFireAuth, private router: Router, private auth: Auth) {

    this.loggedIn = !!sessionStorage.getItem('user');

  }

  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email, password).then( () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }


  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
      alert('Registration Succeful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);

    })
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  // Get currently logged in user from session
  getCurrentUser(): string | any {
    return sessionStorage.getItem('user') || undefined;
  }

}
