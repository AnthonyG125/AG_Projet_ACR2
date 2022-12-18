import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  produits!: any[];

  constructor(db: AngularFireDatabase) {
    db.list("/produit").valueChanges()
      .subscribe(produits => {
        this.produits = produits;
        console.log(this.produits);
      })
  }
}
