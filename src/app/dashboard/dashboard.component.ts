import { Products } from './../supplier/mock-products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products=Products;
  constructor() { }

  ngOnInit(): void {
  }

}
