import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import {Produit} from "../../model/produit.model";
import {Sold} from "../../model/sold.model";
import {AuthService} from "../../service/auth.service";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  productList: Produit[] = [];
  soldList: Sold[] = [];

  constructor(private auth: AuthService, private data: DataService ) {
  }

  ngOnInit(): void {
    this.getProductById("1");
    this.getSoldById("1");
    }

  getProductById(id: string){
    this.data.getProductById(id).subscribe((res: any) => {
      this.productList = res;
      console.log(res);
    })
  }

  getSoldById(id: string){
    this.data.getSoldById(id).subscribe((res: any) => {
      this.soldList = res;
      console.log(res);
    })
  }


}
