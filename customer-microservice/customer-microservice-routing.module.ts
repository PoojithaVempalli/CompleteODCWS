import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { ViewpacksComponent } from './viewpacks/viewpacks.component';
import { RatingComponent } from './rating/rating.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  {
    path: 'customer', component: CustomerComponent,
    children:[
      {
        path:'view',
        component:ShowCustomersComponent
      },
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'washpacks',
        component:ViewpacksComponent
      },
      {
        path:'registration',
        component:RegistrationComponent
      },
      {
        path:'rating',
        component:RatingComponent
      },
      {
        path:'payment',
        component:PaymentComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'dashboard',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerMicroserviceRoutingModule { }
