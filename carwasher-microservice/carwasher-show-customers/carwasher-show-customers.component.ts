import { Component, OnInit } from '@angular/core';
import { CarwasherService } from 'src/app/services/carwasher.service';
import { WasherauthService } from 'src/app/services/washerauth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carwasher-show-customers',
  templateUrl: './carwasher-show-customers.component.html',
  styleUrls: ['./carwasher-show-customers.component.css']
})
export class CarwasherShowCustomersComponent implements OnInit {
  public _opened: boolean = false;
  public removed:boolean = true;
  public edit:boolean = false;
  orders:any = []
  array:any = []
  cost:any;
  price:any;

  constructor(private carwasher:CarwasherService,private washerAuth:WasherauthService) {
      this.carwasher.getOrdersData().subscribe(order=>{
        this.orders=order;
        this.array = order;
      })
  }

  public getPrice(washpackId:number){
    this.carwasher.getWashPackPrice(washpackId).subscribe(data=>{this.cost=data
      this.price = +(this.cost);
      console.log(this.price);
    });
    return this.cost;
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public delete(id:number){
    let resp= this.carwasher.deleteWasher(id);
    resp.subscribe((data)=>this.orders=data);
    console.log(id);
  }

  ngOnInit(): void {
  }
  // isRemove(){
  //   return !this.removed;
  // }
  // hide(i:number){
  //   console.log(this.array);
  //   this.orders.splice(i,1);
  // }
  // select(order:any){
  //   console.log(order);
  //   order.washerName = this.washerAuth.getWasherName();
  //   console.log(order);

  //   this.edit = true;
  // }


}
