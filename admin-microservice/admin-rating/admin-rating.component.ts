import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { RatingInfo } from './ratinginfo';
@Component({
  selector: 'app-admin-rating',
  templateUrl: './admin-rating.component.html',
  styleUrls: ['./admin-rating.component.css']
})
export class AdminRatingComponent {
  message:any;
  constructor(private admin:AdminService) { }

  rating: RatingInfo={id:0,washerName: "",rating:0,comment: ""}

  ratingForm = new FormGroup({
    id: new FormControl('',Validators.required),
    washerName : new FormControl('',Validators.required),
    rating: new FormControl('',Validators.required),
    comment: new FormControl('',Validators.required),
  });
  placeRating(){
    this.admin.postRating(this.rating).subscribe(data=>{this.message=data
      console.log(this.message);});
    console.log(this.rating);
    alert('Rating updated successfully');
    // this.admin.postRating(this.rating).subscribe(data=>{this.message=data
    //   console.log(this.message);});
    // console.log(this.rating);
    // alert('Rating updated successfully');
  }

  confirm(){
    if(this.rating.id < 0){
      alert('Enter valid positive ID');
    }else if(this.rating.rating < 0){
      alert('Enter valid positive rating');
    }
    else{
      Swal.fire({
        title: 'Update Rating?',
        text: "Your rating is saved, Thank You",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Done!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.placeRating();
        }
      })

    }

    
  }

  // ngOnInit(): void {
  // }

}
