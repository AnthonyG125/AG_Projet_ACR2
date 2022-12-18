import {Component, OnInit} from '@angular/core';
import { MatCard } from "@angular/material/card";
import {AuthService} from "../../service/auth.service";
import {DataService} from "../../service/data.service";
import {MatDialog} from "@angular/material/dialog";
import {Sold} from "../../model/sold.model";

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.scss']
})
export class SoldComponent implements OnInit{

  soldList: Sold[] = [];
  id : string = '';
  libelle : string = '';
  description : string = '';
  img: string = '';
  price: number = 0;
  lien: string = '';

  constructor(private auth: AuthService, private data: DataService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllSold();
  }

  getAllSold(){
    this.data.getAllSold().subscribe(res => {
      this.soldList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, error => {
      alert('Error while fetching product data');

    })
  }
}
