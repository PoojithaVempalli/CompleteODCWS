import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { adminDetails } from './adminDetails';
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  adminDetails:adminDetails = {
    id:0,name:"",password:""
  }

  message:any;
  responsetype:any;
  constructor(private admin:AdminService) { }
  RegistrationForm = new FormGroup({
    name : new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    id : new FormControl(),
  });

  public registerNow(){
    console.log("Entered Registration details");
    this.admin.Isexist(this.adminDetails.id).subscribe(data=>{
      if(data === "false"){
        this.admin.Isexistbyname(this.adminDetails.name).subscribe(data=>{
          if(data === "false"){
            let res = this.admin.postRegistration(this.adminDetails);
            res.subscribe(data=>this.message=data)
            console.log(this.adminDetails);
            alert("Admin with ID " + this.adminDetails.id + " registered Successfully");
          }
          else{
            console.log("Admin with Name already EXIST!");
        alert('admin with Name already Exist');
        Swal.fire({
          title: 'Admin with Name already EXIST!',
          text: "Admin with Name " + this.adminDetails.name +" already exist, " + "Please register with other Name!" ,
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
        console.log("Admin with ID already EXIST!");
        alert('admin with ID already Exist');
        Swal.fire({
          title: 'Admin with ID already EXIST!',
          text: "Admin with ID " + this.adminDetails.id +" already exist, " + "Please register with other ID!" ,
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
