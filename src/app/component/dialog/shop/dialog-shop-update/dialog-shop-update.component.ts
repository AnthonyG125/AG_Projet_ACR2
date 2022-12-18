import {Component, Inject} from '@angular/core';
import {Produit} from "../../../../model/produit.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DataService} from "../../../../service/data.service";

@Component({
  selector: 'app-dialog-shop-update',
  templateUrl: './dialog-shop-update.component.html',
  styleUrls: ['./dialog-shop-update.component.scss']
})
export class DialogShopUpdateComponent {
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
    public dialogRef: MatDialogRef<DialogShopUpdateComponent>,
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

  updateProduct() {
    this.ProductObj.id= '';
    this.ProductObj.libelle = this.data.libelle;
    this.ProductObj.description = this.data.description;
    this.ProductObj.img = this.data.img;
    this.ProductObj.price = this.data.price;

    this.dataS.updateProduit(this.ProductObj);
    this.resetForm();

  }


}
