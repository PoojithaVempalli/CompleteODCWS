import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminRatingComponent } from './admin-rating/admin-rating.component'
import { ViewadminsComponent } from './viewadmins/viewadmins.component';
import { ViewPacksComponent } from './viewpacks/viewpacks.component';
import { ViewwashersComponent } from './viewwashers/viewwashers.component';
import { ViewratingsComponent } from './viewratings/viewratings.component';
import { AdminPacksComponent } from './admin-packs/admin-packs.component';
import { AdminWasherComponent } from './admin-washer/admin-washer.component';


const routes: Routes = [
  {path:'dashboard',component:AdminDashboardComponent},
  {path:'login',component:AdminLoginComponent},
  {path: 'registration',component:AdminRegistrationComponent},
  {path:'addrating',component:AdminRatingComponent},
  {path:'alladmins',component:ViewadminsComponent},
  {path: 'allpacks', component:ViewPacksComponent},
  {path: 'addpack', component:AdminPacksComponent},
  {path: 'addwasher', component:AdminWasherComponent},
  {path:'allwashers',component:ViewwashersComponent},
  {path: 'allratings',component:ViewratingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMicroserviceRoutingModule { }
