import {Component, OnInit} from '@angular/core';
import {Produit} from "../../model/produit.model";
import {AuthService} from "../../service/auth.service";
import {DataService} from "../../service/data.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogShopAddComponent} from "../dialog/shop/dialog-shop-add/dialog-shop-add.component";
import {DialogShopUpdateComponent} from "../dialog/shop/dialog-shop-update/dialog-shop-update.component";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{

  productList: Produit[] = [];
  id : string = '';
  libelle : string = '';
  description : string = '';
  img: string = '';
  price: number = 0;

  constructor(private auth: AuthService, private data: DataService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.data.getAllProduct().subscribe(res => {
      this.productList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, error => {
      alert('Error while fetching product data');

    })
  }


  updateProduct() {

  }

  deleteProduct(produit : Produit){
    if(window.confirm('Etes-vous sûr de vouloir supprimer le produit "' + produit.libelle + '" ?')){
      this.data.deleteProduct(produit);
    }

  }


  openDialogAdd(): void {
    const dialogRef = this.dialog.open(DialogShopAddComponent, {
      width:'200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openDialogUpdate(produit: Produit): void {
    const dialogRef = this.dialog.open(DialogShopUpdateComponent, {
      width:'200px',
      data: {
        libelle: produit.libelle,
        description: produit.description,
        img: produit.img,
        price: produit.price
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}





