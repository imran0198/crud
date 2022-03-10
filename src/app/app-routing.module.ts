import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:"",redirectTo:'product',pathMatch:"full"},
  {path:'edit/:i',component:EditProductComponent},
  {path:"product",component:ProductComponent},
  {path:"add",component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
