import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer-microservice/customer/customer.component';
import { OrderComponent } from './customer-microservice/order/order.component';
import { ShowCustomersComponent } from './customer-microservice/show-customers/show-customers.component';
import { LoginComponent } from './customer-microservice/login/login.component';
import { DashboardComponent } from './customer-microservice/dashboard/dashboard.component';
import { CarwasherComponent } from './carwasher-microservice/carwasher/carwasher.component';
import { CarwasherDashboardComponent } from './carwasher-microservice/carwasher-dashboard/carwasher-dashboard.component';
import { CarwasherLoginComponent } from './carwasher-microservice/carwasher-login/carwasher-login.component';
import { CarwasherShowCustomersComponent } from './carwasher-microservice/carwasher-show-customers/carwasher-show-customers.component';
import { AdminLogicComponent } from './admin-microservice/admin-logic/admin-logic.component';
import { AdminDashboardComponent } from './admin-microservice/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-microservice/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-microservice/admin-registration/admin-registration.component';
import { ViewordersComponent } from './admin-microservice/vieworders/vieworders.component';
import { ViewcustomersComponent } from './admin-microservice/viewcustomers/viewcustomers.component';
import { ProfileComponent } from './carwasher-microservice/profile/profile.component';
import { ViewpacksComponent } from './customer-microservice/viewpacks/viewpacks.component';
import { RatingComponent } from './customer-microservice/rating/rating.component';
import { AdminRatingComponent } from './admin-microservice/admin-rating/admin-rating.component';
import { ViewadminsComponent } from './admin-microservice/viewadmins/viewadmins.component';
import { ViewPacksComponent } from './admin-microservice/viewpacks/viewpacks.component';
import { ViewwashersComponent } from './admin-microservice/viewwashers/viewwashers.component';
import { ViewratingsComponent } from './admin-microservice/viewratings/viewratings.component';
import { AdminPacksComponent } from './admin-microservice/admin-packs/admin-packs.component';
import { WasherRegistrationComponent } from './carwasher-microservice/washer-registration/washer-registration.component';
import { AdminWasherComponent } from './admin-microservice/admin-washer/admin-washer.component';
import { RegistrationComponent } from './customer-microservice/registration/registration.component';
import { PaymentComponent } from './customer-microservice/payment/payment.component';
const routes: Routes = [
  { path:'',redirectTo:'/home',pathMatch:'full' },
  { path:'home', component: HomeComponent },
   {
    path: 'customer', component: CustomerComponent,
    children:[
      { path:'',redirectTo:'/customer/dashboard',pathMatch:'full'},
      { path:'order',component:OrderComponent,pathMatch:'full'},
      { path:'view',component:ShowCustomersComponent},
      { path:'registration',component:RegistrationComponent},
      { path:'washpacks',component:ViewpacksComponent},
      {path:'rating',component:RatingComponent},
      { path:'login',component:LoginComponent,pathMatch:'full'},
      { path:'dashboard',component:DashboardComponent,pathMatch:'full'},
      { path:'payment',component:PaymentComponent,pathMatch:'full'},
    ]
    },
    {
      path:'carwasher',component:CarwasherComponent,
      children:[
        {path:'',redirectTo:'/carwasher/dashboard',pathMatch:'full'},
        {path:'dashboard',component:CarwasherDashboardComponent},
        {path:'login',component:CarwasherLoginComponent},
        {path:'registration',component:WasherRegistrationComponent},
        {path:'vieworders',component:CarwasherShowCustomersComponent},
        {path:'profile',component:ProfileComponent}
      ]
    },
    {
      path:'admin',component:AdminLogicComponent,
      children:[
        {path:'',redirectTo:'/admin/dashboard',pathMatch:'full'},
        {path:'dashboard',component:AdminDashboardComponent},
        {path:'login',component:AdminLoginComponent},
        {path: 'addrating', component:AdminRatingComponent},
        {path: 'addpack',component:AdminPacksComponent},
        {path: 'addwasher',component:AdminWasherComponent},
        {path:'alladmins',component:ViewadminsComponent},
        {path: 'allwashers', component:ViewwashersComponent},
        {path: 'allpacks', component:ViewPacksComponent},
        {path: 'allratings',component:ViewratingsComponent},
        {path: 'registration',component:AdminRegistrationComponent},
        {path:'vieworders',component:ViewordersComponent},
        {path:'viewcustomers',component:ViewcustomersComponent},
        
        
      ]
    },
   { path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
