import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarwasherLoginComponent } from './carwasher-login/carwasher-login.component';
import { CarwasherShowCustomersComponent } from './carwasher-show-customers/carwasher-show-customers.component';
import { CarwasherComponent } from './carwasher/carwasher.component';
import { WasherRegistrationComponent } from './washer-registration/washer-registration.component';

const routes: Routes = [
  {
    path: 'carwasher', component: CarwasherComponent,
    children:[
      {
        path:'view',
        component:CarwasherShowCustomersComponent
      },
      {
        path:'registration',
        component:WasherRegistrationComponent
      },
      {
        path:'login',
        component:CarwasherLoginComponent
      },
      {
        path:'dashboard',
        component:CarwasherLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarWasherMicroserviceRoutingModule { }
