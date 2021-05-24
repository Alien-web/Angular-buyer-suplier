import { Product } from './../supplier/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {

@Input() product:Product={id:0,name:"",cost:0};
@Input() flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
