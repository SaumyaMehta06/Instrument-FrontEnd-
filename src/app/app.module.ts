import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
import { HomeComponent } from './home/home.component';

import {MatButtonModule} from '@angular/material/button';
import { CorouselComponent } from './home/corousel/corousel.component';
import { ProductsComponent } from './home/products/products.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { CartItemsComponent } from './home/cart-items/cart-items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddproductComponent,
    DashboardComponent,
    ProductEditComponent,
    AdminComponent,
    AdminNavComponent,
    NavbarComponent,
    ProductdetailsComponent,
    HomeComponent,
    CorouselComponent,
    ProductsComponent,
    HomePageComponent,
    CartItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
