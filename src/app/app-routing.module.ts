import { DetailsComponent } from './details/details.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"", redirectTo:"/dashboard", pathMatch:"full"},
{path:"dashboard", component:DashboardComponent},
{path:"products", component:SupplierComponent},
{path:"details/:id", component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
