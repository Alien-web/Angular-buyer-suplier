import { MessageService } from './message.service';
import { Products } from './supplier/mock-products';
import { Injectable } from '@angular/core';
import { Product } from './supplier/products';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts():Observable<Product[]>{
    this.messageService.add("Products fetched");
    return of (Products);
  }
  constructor(private messageService:MessageService) { }
}
