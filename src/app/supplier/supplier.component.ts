import { ProductsService } from './../products.service';
import { Products } from './mock-products';
import { Product } from './products';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  products:Product[]=[{id:0,name:"",cost:0}];
  selectedproduct: Product|undefined;
  flag:boolean=false;
  @Output() newItemEvent = new EventEmitter<Product>();
  @Output() newFlagEvent = new EventEmitter<boolean>();

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product:Product){
    this.selectedproduct=product;
    this.newItemEvent.emit(this.selectedproduct);
   }
   changeCost(value:Event){
     this.flag=true;
     this.newFlagEvent.emit(this.flag);
   }
   getProducts():void{
     this.productsService.getProducts().subscribe(Products=>this.products=Products)
   }
}
