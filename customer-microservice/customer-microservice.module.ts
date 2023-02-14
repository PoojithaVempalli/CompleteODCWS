import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { MaterialModule } from '../material/material.module';
import { CustomerMicroserviceRoutingModule } from './customer-microservice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewpacksComponent } from './viewpacks/viewpacks.component';
import { RatingComponent } from './rating/rating.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    CustomerComponent,
    OrderComponent,
    ShowCustomersComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    ViewpacksComponent,
    RatingComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CustomerMicroserviceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CustomerComponent
  ]
})
export class CustomerMicroserviceModule { }
