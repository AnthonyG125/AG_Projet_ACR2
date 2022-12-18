import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Produit} from "../../../../model/produit.model";
import {DataService} from "../../../../service/data.service";

@Component({
  selector: 'app-dialog-shop-add',
  templateUrl: './dialog-shop-add.component.html',
  styleUrls: ['./dialog-shop-add.component.scss']
})
export class DialogShopAddComponent {

  ProductObj: Produit = {
    id: "",
    libelle: "",
    description: "",
    img: "",
    price: 0
  }
  id : string = '';
  libelle : string = '';
  description : string = '';
  img: string = '';
  price: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogShopAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produit,
    private dataS: DataService
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  resetForm(){
    this.id = '';
    this.libelle  = '';
    this.description = '';
    this.img = '';
    this.price = 0;
  }

  addProduct(){
    if(this.libelle == '' || this.description == '' || this.img == '' ){
      alert('Renseignez tous les champs');
      return
    }

    this.ProductObj.id= '';
    this.ProductObj.libelle = this.libelle;
    this.ProductObj.description = this.description;
    this.ProductObj.img = this.img;
    this.ProductObj.price = this.price;

    this.dataS.addProduct(this.ProductObj);
    this.resetForm();
  }

}
