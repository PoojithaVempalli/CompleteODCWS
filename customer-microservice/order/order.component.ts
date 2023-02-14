import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import { OrderInfo } from './orderinfo';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  message:any;
  addons:any = [];
  promos:any = [];
  details:any = [];
  price:number = 0;
  carDetailsPrice:number;
  name:any;
  cost:any;
  output:any;


  order: OrderInfo={carModel: "",carName: "",date: "",orderId: 0,phoneNo: 0,userId: 0,washerName: "",washpackId: 0,cost:0}

  constructor(private customer:CustomerService) {
    this.carDetailsPrice=0;
  }
  orderForm = new FormGroup({
    name : new FormControl('',Validators.required),
    userid: new FormControl('',Validators.required),
    phoneNo: new FormControl('',[Validators.required,Validators.minLength(10)]),
    washerName: new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    washpackId: new FormControl('',Validators.required),
    carName: new FormControl('',Validators.required),
    carModel: new FormControl('',Validators.required),
    orderId: new FormControl('',Validators.required)
  });
  placeOrder(){
    // this.order.addOnCost=Number(this.addOnPrice);
    // this.order.promoprice=Number(this.promoPrice);
    // this.order.washcost=Number(this.carDetailsPrice);
    this.order.cost = this.cost;
    this.customer.postOrder(this.order).subscribe(data=>{this.message=data
      console.log(this.message);});
    console.log(this.order);
  }

  getPrice(washpackId:number){
    this.customer.getWashPackPrice(washpackId).subscribe(data=>{this.cost=data
      this.price = +(this.cost);
      console.log(this.price);
    });
  }

  confirm(){
    Swal.fire({
      title: 'Place Order?',
      text: "Your order willl be confirmed at " + this.price + " rupees",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Done!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.placeOrder();
      }
    })
  }

}
