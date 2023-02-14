import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CustomerauthService } from 'src/app/services/customerauth.service';
import Swal from 'sweetalert2';
import {CustomerService} from '../../services/customer.service'

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
  public _opened: boolean = false;
  orders:any = []
  cost:any;
  price:any;
  dataArray:any = []
  message:any;
  constructor(private customer:CustomerService,customerAuth:CustomerauthService) {
    
      this.customer.getOrdersData().subscribe(order=>{
        this.orders=order;
        console.log(this.orders);
        
      })
  }
  public getPrice( washpackId:number){
    this.customer.getWashPackPrice(washpackId).subscribe(data=>{this.cost=data
      this.price = +(this.cost);
      console.log(this.price);
    });
    return this.cost;
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public delete(id:string){
    Swal.fire({
      title: 'Are you Sure?',
      text: "Order with ID: " + id + " will be deleted!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Done!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.customer.delete(id).subscribe((data)=>{
          this.message=data;
          console.log(this.message);
          });
          alert('Order deleted Successfully');
          window.location.reload();
      }
    })
    
  }


  ngOnInit() : void{ 
  }  


}
