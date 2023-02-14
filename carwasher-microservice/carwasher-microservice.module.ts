import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarwasherDashboardComponent } from './carwasher-dashboard/carwasher-dashboard.component';
import { CarwasherLoginComponent } from './carwasher-login/carwasher-login.component';
import { CarwasherShowCustomersComponent } from './carwasher-show-customers/carwasher-show-customers.component';
import { CarwasherComponent } from './carwasher/carwasher.component';
import { MaterialModule } from '../material/material.module';
import { CarWasherMicroserviceRoutingModule } from './carwasher-microservice-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { WasherRegistrationComponent } from './washer-registration/washer-registration.component';



@NgModule({
  declarations: [
    CarwasherDashboardComponent,
    CarwasherLoginComponent,
    CarwasherShowCustomersComponent,
    CarwasherComponent,
    ProfileComponent,
    WasherRegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarWasherMicroserviceRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarwasherMicroserviceModule { }
