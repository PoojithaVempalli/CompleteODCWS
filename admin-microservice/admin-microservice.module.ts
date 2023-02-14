import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMicroserviceRoutingModule } from './admin-microservice-routing.module';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminLogicComponent } from './admin-logic/admin-logic.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminRatingComponent } from './admin-rating/admin-rating.component';
import { ViewadminsComponent } from './viewadmins/viewadmins.component';
import { ViewPacksComponent } from './viewpacks/viewpacks.component';
import { ViewwashersComponent } from './viewwashers/viewwashers.component';
import { ViewratingsComponent } from './viewratings/viewratings.component';
import { AdminPacksComponent } from './admin-packs/admin-packs.component';
import { AdminWasherComponent } from './admin-washer/admin-washer.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminLogicComponent,
    AdminLoginComponent,
    ViewordersComponent,
    ViewcustomersComponent,
    AdminRegistrationComponent,
    AdminRatingComponent,
    ViewadminsComponent,
    ViewPacksComponent,
    ViewwashersComponent,
    ViewratingsComponent,
    AdminPacksComponent,
    AdminWasherComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminMicroserviceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    AdminMicroserviceRoutingModule
  ]
})
export class AdminMicroserviceModule { }
