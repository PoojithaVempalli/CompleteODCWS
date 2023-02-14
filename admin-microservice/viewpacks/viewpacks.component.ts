import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewpacks',
  templateUrl: './viewpacks.component.html',
  styleUrls: ['./viewpacks.component.css']
})
export class ViewPacksComponent implements OnInit {

  packs:any;
    public _opened: boolean = false;
    Washpacks:any = [];
    message:any;
  
    constructor(private pack:AdminService) {
        this.pack.getPacks().subscribe(pack=>{
          this.packs=pack;
          console.log(this.packs);
        })
    }
  
    public _toggleSidebar() {
      this._opened = !this._opened;
    }

    // public delete(id:number){
    //   this.pack.deletePacks(id).subscribe((data)=>{this.message=data
    //   console.log(this.message)});
    //   console.log(id);
    // }
    public delete(id:number){
      console.log(id);
      Swal.fire({
        title: 'Are you Sure?',
        text: "Pack with ID: " + id + " will be deleted.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Done!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.pack.deletePacks(id).subscribe((data)=>{this.message=data
            console.log(this.message)});
            alert("Pack deleted successfully");
            window.location.reload();
        }
      })
    }


  ngOnInit(): void {
  }

}
