import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../supplier/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
@Input() selectedproduct:Product|undefined;
flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  changeCost(value:Event){
    this.flag=true;
  }

}
