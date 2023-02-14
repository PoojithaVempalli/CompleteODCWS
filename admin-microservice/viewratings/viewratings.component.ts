import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-viewratings',
  templateUrl: './viewratings.component.html',
  styleUrls: ['./viewratings.component.css']
})
export class ViewratingsComponent implements OnInit {

  ratings:any;
  public _opened: boolean = false;
  message:any;

  constructor(private rating:AdminService) {
      this.rating.getRatings().subscribe(rating=>{
        this.ratings=rating;
        console.log(this.ratings);
      })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  // public delete(id:number){
  //   this.rating.deleteRating(id).subscribe((data)=>{this.message=data
  //   console.log(this.message)});
  //   console.log(id);
  // }
  public delete(id:number){
    console.log(id);
    Swal.fire({
      title: 'Are you Sure?',
      text: "Ratings with ID: " + id + " will be deleted.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Done!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rating.deleteRating(id).subscribe((data)=>{this.message=data
          console.log(this.message)});
          alert('Rating with id deleted successfully');
      }
      window.location.reload();
    })
  }


  ngOnInit(): void {
  }

}
