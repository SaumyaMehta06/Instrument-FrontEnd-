import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AuthGuard } from './auth/auth.guard';
import { CartItemsComponent } from './home/cart-items/cart-items.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "addProduct", component: AddproductComponent },
      { path: "productEdit/:id", component: ProductEditComponent }
    ]
  },
  { path: "home", component: HomePageComponent },
  { path: "product/:id", component: ProductdetailsComponent },
  { path: "cart/:id", component: CartItemsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
