import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {
    path:"products",
    component:ProduitsComponent
  },  {
    path:"new-product",
    component:NewProductComponent
  },{
    path:"",
    redirectTo:"/products",pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
