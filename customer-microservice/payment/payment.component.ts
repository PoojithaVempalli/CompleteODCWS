import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import {PaymentInfo} from './paymentinfo';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public _opened: boolean = false;
  orders:any=[];
  paymentId: string='';
  error: string='';

  payment: PaymentInfo={
    amount: 0,
    orderId: 0,
    paymentStatus: "",
    txId: "",
  }
  options = {
    "key": "",
    "amount": "", 
    "name": "Payment Gate-Way",
    "description": "Kindly Pay!",
    "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id":"",
    "handler": function (response:any){
      var event = new CustomEvent("payment.success", 
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );	  
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };
  
  constructor(private customer:CustomerService) {
    this.customer.getOrdersData().subscribe(order=>{
        this.orders=order;
        console.log(this.orders);
        
      })
   }
  
   public _toggleSidebar() {
    this._opened = !this._opened;
  }
  public makepayment(order:any){
      Swal.fire({
        title: 'Make Payment?',
        text: order.cost + " Rupees will be deducted from your Account.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          
            this.paymentId = ''; 
            this.error = ''; 
            this.customer.createOrder(order).subscribe(
            data => {
              this.options.key = data.secretId;
              this.options.order_id = data.razorpayOrderId;
              this.options.amount = data.applicationFee; //paise
              this.options.prefill.name = "Capgemini";
              this.options.prefill.email = "odcws.cg@gmail.com";
              this.options.prefill.contact = order.phoneNo;
              
              
                this.options.image="";
                var rzp1 = new Razorpay(this.options);
                rzp1.open();
              

              rzp1.on('payment.failed',  (response:any) =>{    
                // Todo - store this information in the server
                console.log(response);
                console.log(response.error.code);    
                console.log(response.error.description);    
                console.log(response.error.source);    
                console.log(response.error.step);    
                console.log(response.error.reason);    
                console.log(response.error.metadata.order_id);    
                console.log(response.error.metadata.payment_id);
                this.error = response.error.reason;
              }
              );
            }
          
            // err => {
            //   this.error = err.error.message;
            // }
            );
          
      

          this.payment.amount = order.cost;
          this.payment.orderId = order.orderId;
          this.payment.paymentStatus = "success";
          console.log(this.payment);
          this.customer.postPayment(this.payment).subscribe(data=>{
            console.log(data);
            
          
          });
          order.orderStatus="success";
          this.customer.updateorderstatus(order).subscribe(data=>{
            console.log(data);
          })
        }
      })
    
  }
  
  ngOnInit(): void {
  }
  @HostListener('window:payment.success', ['$event']) 
onPaymentSuccess(event:any): void {
   console.log(event.detail);
   Swal.fire({
    title: 'Congratulations Payment is done successfully!!',
    text:  "Amount has been deducted from your Account.",
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Done!'
  }).then((result) => {
    window.location.reload();
  });
}
}         



