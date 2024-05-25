import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {  FileUploadModule } from 'ng2-file-upload';

import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import { FoodService } from './shared/food.service';
import { VwuserService} from './shared/vwuser.service';
import { OrderService } from './shared/order.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ViewcategoryComponent } from './admin/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './admin/editcategory/editcategory.component';
import { AddfoodComponent } from './admin/addfood/addfood.component';
import { ViewfoodComponent } from './admin/viewfood/viewfood.component';
import { EditfoodComponent } from './admin/editfood/editfood.component';
import { ReguserComponent } from './admin/reguser/reguser.component';
import { BookingComponent } from './admin/booking/booking.component';
import { UserComponent } from './user/user.component';
import { AdminHomeComponent} from './admin/home/home.component';
import { AdminContactComponent} from './admin/contact/contact.component';
import {HeaderAdminComponent} from './header-admin/header-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    AddcategoryComponent,
    ViewcategoryComponent,
    EditcategoryComponent,
    AddfoodComponent,
    ViewfoodComponent,
    EditfoodComponent,
    ReguserComponent,
    BookingComponent,
    AdminHomeComponent,
    AdminContactComponent,
    HeaderAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },AuthGuard, UserService , CategoryService, FoodService, VwuserService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
