import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { WashpackInfo } from './washpacksinfo';
@Component({
  selector: 'app-admin-packs',
  templateUrl: './admin-packs.component.html',
  styleUrls: ['./admin-packs.component.css']
})
export class AdminPacksComponent {
  message:any;
  constructor(private admin:AdminService) { }

  pack: WashpackInfo={id:0,name: "",cost:0,description: ""}

  packForm = new FormGroup({
    id: new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    cost: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  });
  // placePack(){
  //   this.admin.postPack(this.pack).subscribe(data=>{this.message=data
  //     console.log(this.message);});
  //   console.log(this.pack);
  // }

  // confirm(){
  //   Swal.fire({
  //     title: 'Update WashPack?',
  //     text: "Washpack is saved",
  //     icon: 'success',
  //     showCancelButton: true,
  //     confirmButtonText: 'Done!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.placePack();
  //     }
  //   })
  // }

  public placePack(){
    console.log("Entered Pack details");
    this.admin.Ispackexist(this.pack.id).subscribe(data=>{
      if(data === "false"){
        let res = this.admin.postPack(this.pack);
    res.subscribe(data=>this.message=data)
    console.log(this.pack);
    alert('Pack saved successfully');
      }else{
        console.log("Pack with ID already EXIST!");
        alert('Pack with ID already Exist');
        Swal.fire({
          title: 'Pack with ID already EXIST!',
          text: "Pack with ID " + this.pack.id +" already exist, " + "Please enter anyother ID!" ,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.placePack();
          }
        })
      }
    });
    
  }



  // ngOnInit(): void {
  // }

}
