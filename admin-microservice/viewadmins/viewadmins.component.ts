import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewadmins',
  templateUrl: './viewadmins.component.html',
  styleUrls: ['./viewadmins.component.css']
})
export class ViewadminsComponent implements OnInit {

  admins:any;
    public _opened: boolean = false;
    message:any;
  
    constructor(private admin:AdminService) {
        this.admin.getAdmins().subscribe(admin=>{
          this.admins=admin;
          console.log(this.admins);
        })
    }
  
    public _toggleSidebar() {
      this._opened = !this._opened;
    }

    public delete(id:number){
      console.log(id);
      Swal.fire({
        title: 'Are you Sure?',
        text: "Admin with ID: " + id + " will be deleted.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Done!'
      }).then((result) => {
        if (result.isConfirmed) {
          alert("Admin deleted successfully");
          this.admin.delete(id).subscribe((data)=>{this.message=data
            console.log(this.message)});
            window.location.reload();
            
        }
      })
    }

  ngOnInit(): void {
  }

}
