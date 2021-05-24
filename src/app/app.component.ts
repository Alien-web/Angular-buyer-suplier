import { Product } from './supplier/products';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buyerSupplier';
  data:boolean|undefined;
  products:Product={id:0,name:"",cost:0};
  flag:boolean=false;

  setValue(value: boolean): void {
    this.data = value;
  }
  addItem(newItem: Product) {
    this.products=newItem;
  }
  addFlag(newFlag: boolean){
    this.flag=true;
  }
}
