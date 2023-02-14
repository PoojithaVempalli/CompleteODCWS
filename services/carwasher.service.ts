import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarwasherService {


  constructor(private http:HttpClient) { }

  getOrdersData(){
    let url = 'http://localhost:8081/order/allorders';
    return this.http.get(url);
  }

  getProfileData(username:string){
    let url = `http://localhost:8081/carwasher/profile/${username}`;
    return this.http.get(url);
  }

  getWashPackPrice(id:number){
    console.log(id)
    return this.http.get(`http://localhost:7071/admin/packcost/${id}`);
  }

  Isexist(id:any){
    let url = `http://localhost:9090/washer/washerexist/${id}`;
    return this.http.get(url,{responseType:'text' as 'json'});
  }

  Isexistbyname(name:any){
    let url = `http://localhost:9090/washer/washerexistbyname/${name}`;
    return this.http.get(url,{responseType:'text' as 'json'});
  }

  postRegistration(washer:any){
    return this.http.post('http://localhost:9090/washer/addwasher',washer,{responseType:'text' as 'json'})
  }

  deleteWasher(id:number){
    return this.http.delete(`http://localhost:9090/washer/delete/${id}`,{responseType:'text' as 'json'});
  }

}
