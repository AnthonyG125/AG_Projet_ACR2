import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth : AuthService) {
  }

  login(){

    if(this.email == ''){
      alert('Entrez une adresse email');
      return;
    }

    if(this.password == ''){
      alert('Entrez un mot de passe');
      return;
    }

    this.auth.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }
}
