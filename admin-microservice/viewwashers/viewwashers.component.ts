import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-viewwashers',
  templateUrl: './viewwashers.component.html',
  styleUrls: ['./viewwashers.component.css']
})
export class ViewwashersComponent implements OnInit {

  washers:any;
  public _opened: boolean = false;
  Washpacks:any = []
  message:any;
  constructor(private washer:AdminService) {
      this.washer.getWashers().subscribe(washer=>{
        this.washers=washer;
        console.log(this.washers);
      })
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  // public delete(id:number){
  //   this.washer.deleteWasher(id).subscribe((data)=>{this.message=data
  //   console.log(this.message)});
  //   console.log(id);
  // }

  public delete(id:number){
    console.log(id);
    Swal.fire({
      title: 'Are you Sure?',
      text: "Washer with ID: " + id + " will be deleted.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Done!'
    }).then((result) => {
      alert('Washer deleted successfully');
      if (result.isConfirmed) {
        this.washer.deleteWasher(id).subscribe((data)=>{this.message=data
          console.log(this.message)});
          window.location.reload();
      }
    })
  }

  ngOnInit(): void {
  }

}
