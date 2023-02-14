import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-viewpacks',
  templateUrl: './viewpacks.component.html',
  styleUrls: ['./viewpacks.component.css']
})
export class ViewpacksComponent implements OnInit {

    public _opened: boolean = false;
    Washpacks:any = []
  
    constructor(private customer:CustomerService) {
        this.customer.getWashpacksData().subscribe(packs=>{
          this.Washpacks=packs;
          console.log(this.Washpacks);
        })
    }
  
    public _toggleSidebar() {
      this._opened = !this._opened;
    }
  

  ngOnInit(): void {
  }

}
