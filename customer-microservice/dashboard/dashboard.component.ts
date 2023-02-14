import { Component, OnInit } from '@angular/core';
import { CustomerauthService } from 'src/app/services/customerauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:string;
  constructor(private customerAuth:CustomerauthService) {
    this.username = customerAuth.getCustomerName();
    if(!this.username) this.username = "Customer";
   }
  ngOnInit(): void {
  }
  logout(){
    this.customerAuth.logout();
  }
}
