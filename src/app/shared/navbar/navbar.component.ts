import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  login: any;
  user: any;

  constructor(public auth : AuthService) {
  }


  logout(){
    this.auth.logout();
  }

  ngOnInit(): void {
   this.login = this.auth.isLoggedIn();
    console.log(this.login)

    this.user = this.auth.getCurrentUser();
    console.log(this.user)
  }
}
