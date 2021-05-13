import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryProductComponent } from './add-category-product/add-category-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewordersComponent } from './vieworders/vieworders.component';

const routes: Routes = [
  
  {
    path: "", component:HomeComponent
  },
  {
    path: "addProductCategory", component:AddCategoryProductComponent
  },
  {
    path: "navbar", component:NavbarComponent
  },
  {
    path: "home", component:HomeComponent
  },
  {
    path: "login", component:LoginComponent
  },
  {
    path: "viewOrders/:status", component:ViewordersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
