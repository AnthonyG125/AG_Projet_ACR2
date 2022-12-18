import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Produit} from "../model/produit.model";
import {Sold} from "../model/sold.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  /***
   * Produit
   *
   */

  addProduct(produit: Produit){
    produit.id = this.afs.createId();
    return this.afs.collection('/produit').add(produit);
  }

  getAllProduct(){
    return this.afs.collection('/produit').snapshotChanges();
  }

  deleteProduct(produit: Produit){
    return this.afs.doc('/produit/' + produit.id).delete();
  }

  updateProduit(produit: Produit){
    this.deleteProduct(produit);
    this.addProduct(produit);

  }

  /****
   * Sold
   */

  getAllSold(){
    return this.afs.collection('/sold').snapshotChanges();
  }
  addSold(sold: Sold){
    sold.id = this.afs.createId();
    return this.afs.collection('/solmd').add(sold);
  }
}
