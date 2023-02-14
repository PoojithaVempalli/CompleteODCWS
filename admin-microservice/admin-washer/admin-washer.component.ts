import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { WasherInfo } from './washerInfo';

@Component({
  selector: 'app-admin-washer',
  templateUrl: './admin-washer.component.html',
  styleUrls: ['./admin-washer.component.css']
})
export class AdminWasherComponent  {

  message:any;
  constructor(private admin:AdminService) { }

  washer: WasherInfo={id:0,name: "",location:"",password: ""}

  washerForm = new FormGroup({
    id: new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  placeWasher(){
    this.admin.postWasher(this.washer).subscribe(data=>{this.message=data
      console.log(this.message);});
    console.log(this.washer);
  }

  confirm(){
    Swal.fire({
      title: 'Update Washer?',
      text: "Washer is saved",
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Done!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.placeWasher();
      }
    })
  }



  // ngOnInit(): void {
  // }

}
