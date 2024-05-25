import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { SignUpComponent } from '../user/sign-up/sign-up.component';
import { SignInComponent } from '../user/sign-in/sign-in.component';
import { AdminComponent } from '../admin/admin.component';
import { AddcategoryComponent } from '../admin/addcategory/addcategory.component';
import {ViewcategoryComponent} from '../admin/viewcategory/viewcategory.component';
import {EditcategoryComponent} from '../admin/editcategory/editcategory.component';
import {AddfoodComponent} from '../admin/addfood/addfood.component';
import {ReguserComponent} from '../admin/reguser/reguser.component';
import {BookingComponent} from '../admin/booking/booking.component';
import { ViewfoodComponent} from '../admin/viewfood/viewfood.component';
import { EditfoodComponent } from '../admin/editfood/editfood.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminHomeComponent } from '../admin/home/home.component';
import { AdminContactComponent } from '../admin/contact/contact.component';

const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:UserComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},


//   {
//     path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
//     children: [{ path: 'AddCategory', component: AddcategoryComponent  },
//     { path: 'ViewCategory', component: ViewcategoryComponent },
//     { path: 'EditCategory/:id', component : EditcategoryComponent},
//     { path: 'AddFood', component: AddfoodComponent},
//     { path: 'ViewFood', component: ViewfoodComponent},
//     { path: 'EditFood/:id', component: EditfoodComponent },
//     { path: 'reguser', component: ReguserComponent},
//     { path: 'booking' , component: BookingComponent},
//     {path: 'home',component:AdminHomeComponent}
// ]
// }

      // { path: 'admin',canActivate: [AuthGuard],redirectTo:'admin/home',pathMatch:'full'},
      { path: 'admin/AddCategory', component: AddcategoryComponent  , canActivate: [AuthGuard]},
      { path: 'admin/ViewCategory', component: ViewcategoryComponent , canActivate: [AuthGuard]},
      { path: 'admin/EditCategory/:id', component : EditcategoryComponent, canActivate: [AuthGuard]},
      { path: 'admin/AddFood', component: AddfoodComponent, canActivate: [AuthGuard]},
      { path: 'admin/ViewFood', component: ViewfoodComponent, canActivate: [AuthGuard]},
      { path: 'admin/EditFood/:id', component: EditfoodComponent, canActivate: [AuthGuard] },
      { path: 'admin/reguser', component: ReguserComponent, canActivate: [AuthGuard]},
      { path: 'admin/booking' , component: BookingComponent, canActivate: [AuthGuard]},
      { path: 'admin/home',component:AdminHomeComponent, canActivate: [AuthGuard]},
      { path: 'admin/contact',component:AdminContactComponent, canActivate: [AuthGuard]},
   ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
