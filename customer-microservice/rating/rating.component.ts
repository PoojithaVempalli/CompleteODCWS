import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
import { RatingInfo } from './ratinginfo';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  message:any;
  constructor(private customer:CustomerService) { }

  rating: RatingInfo={id:0,washerName: "",rating:0,comment: ""}

  ratingForm = new FormGroup({
    id : new FormControl('',Validators.required),
    washerName : new FormControl('',Validators.required),
    rating: new FormControl('',Validators.required),
    comment: new FormControl('',Validators.required),
  });
  placeRating(){
    this.customer.postRating(this.rating).subscribe(data=>{this.message=data
      console.log(this.message);});
    console.log(this.rating);
  }

  confirm(){
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

  // ngOnInit(): void {
  // }

}
