import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import { customerDetails } from './customerDetails';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customerDetails:customerDetails = {
    id:0,name:"",password:"",location:""
  }

  message:any;

  constructor(private customer:CustomerService) { }
  RegistrationForm = new FormGroup({
    name : new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    location : new FormControl('',Validators.required),
    id : new FormControl('',Validators.required),
  });

  // public registerNow(){
  //   console.log("Entered Registration details");
  //   let res = this.customer.postRegistration(this.customerDetails);
  //   res.subscribe(data=>this.message=data)
  //   console.log(this.customerDetails);
  // }
  public registerNow(){
    console.log("Entered Registration details");
    this.customer.Isexist(this.customerDetails.id).subscribe(data=>{
      if(data === "false"){
        this.customer.Isexistbyname(this.customerDetails.name).subscribe(data=>{
          if(data === "false"){
        let res = this.customer.postRegistration(this.customerDetails);
    res.subscribe(data=>this.message=data)
    console.log(this.customerDetails);
    alert("Customer with ID " + this.customerDetails.id + " registered Successfully");
      }else{
        console.log("Customer with Name already EXIST!");
        alert('customer with Name already Exist');
        Swal.fire({
          title: 'Customer with Name already EXIST!',
          text: "Customer with Name " + this.customerDetails.name +" already exist, " + "Please register with other Name!" ,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            
          }
        })
      }
    });
    
  }else{
    console.log("Customer with ID already EXIST!");
    alert('customer with ID already Exist');
    Swal.fire({
      title: 'Customer with ID already EXIST!',
      text: "Customer with ID " + this.customerDetails.id +" already exist, " + "Please register with other ID!" ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        
      }
    })
  }
});
  }


  ngOnInit(): void {
  }

}
