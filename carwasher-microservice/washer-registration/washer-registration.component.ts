import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CarwasherService } from 'src/app/services/carwasher.service';
import Swal from 'sweetalert2';
import { WasherDetailsInfo } from './washerDetailsInfo';
@Component({
  selector: 'app-washer-registration',
  templateUrl: './washer-registration.component.html',
  styleUrls: ['./washer-registration.component.css']
})
export class WasherRegistrationComponent implements OnInit {

  washerDetails:WasherDetailsInfo = {name:"",password:"",id:0, location:""}

  message:any;

  constructor(private washer:CarwasherService) { }
  
  RegistrationForm = new FormGroup({
    name : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    location : new FormControl('',Validators.required),
    id : new FormControl('',Validators.required)
  });

  public registerNow(){
    console.log("Entered Registration details");
    this.washer.Isexist(this.washerDetails.id).subscribe(data=>{
      if(data === "false"){
        this.washer.Isexistbyname(this.washerDetails.name).subscribe(data=>{
          if(data === "false"){
            let res = this.washer.postRegistration(this.washerDetails);
            res.subscribe(data=>this.message=data)
            console.log(this.washerDetails);
            alert("Washer with ID " + this.washerDetails.id + " registered Successfully");
          }
          else{
            console.log("Washer with Name already EXIST!");
        alert('washer with Name already Exist');
        Swal.fire({
          title: 'Washer with Name already EXIST!',
          text: "Washer with Name " + this.washerDetails.name +" already exist, " + "Please register with other Name!" ,
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
        console.log("Washer with ID already EXIST!");
        alert('washer with ID already Exist');
        Swal.fire({
          title: 'Washer with ID already EXIST!',
          text: "Washer with ID " + this.washerDetails.id +" already exist, " + "Please register with other ID!" ,
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
