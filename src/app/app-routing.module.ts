import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {ShopComponent} from "./component/shop/shop.component";
import {SoldComponent} from "./component/sold/sold.component";
import {AboutComponent} from "./component/about/about.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "shop", component: ShopComponent},
  { path: "sold", component: SoldComponent},
  { path: "about", component: AboutComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
