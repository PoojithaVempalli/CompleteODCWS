import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
x:any;
  constructor(private http:HttpClient) { }
  getOrdersData(){
    let url = 'http://localhost:8080/admin/all/orders';
    return this.http.get(url);
  }

  getCustomersData(){
    let url = 'http://localhost:8080/admin/all/customers';
    return this.http.get(url);
  }

  postRegistration(admin:any){
    console.log(admin);
    return this.http.post('http://localhost:7071/admin/addadmin',admin,{responseType:'text' as 'json'})
  }

  postRating(rating:any){
    return this.http.post('http://localhost:7071/admin/addrating',rating,{responseType:'text' as 'json'})
   }

   postPack(pack:any){
    return this.http.post('http://localhost:7071/admin/addpack',pack,{responseType:'text' as 'json'})
   }

   postWasher(washer:any){
    return this.http.post('http://localhost:9090/washer/addwasher',washer,{responseType:'text' as 'json'})
   }


  getAdmins(){
    let url = 'http://localhost:7071/admin/alladmins';
    return this.http.get(url);
  }

  Isexist(id:any){
    let url = `http://localhost:7071/admin/adminexist/${id}`;
    return this.http.get(url,{responseType:'text' as 'json'});
  }

  Isexistbyname(name:any){
    let url = `http://localhost:7071/admin/adminexistbyname/${name}`;
    return this.http.get(url,{responseType:'text' as 'json'});
  }

  Ispackexist(id:any){
    let url = `http://localhost:7071/admin/packexist/${id}`;
    return this.http.get(url,{responseType:'text' as 'json'});
  }


  getPacks(){
    let url = 'http://localhost:7071/admin/allpacks';
    return this.http.get(url);
  }

  getRatings(){
    let url = 'http://localhost:7071/admin/allratings';
    return this.http.get(url);
  }

  getWashers(){
    let url = 'http://localhost:9090/washer/allwashers';
    return this.http.get(url);
  }
  
  deleteCustomer(id:string){
    let url = `http://localhost:8080/admin/delete_customer/${id}`;
    return this.http.delete(url,{responseType:'text' as 'json'});
  }
  delete(id:number){
    return this.http.delete(`http://localhost:7071/admin/delete/${id}`,{responseType:'text' as 'json'});
  }

  deletePacks(id:number){
    return this.http.delete(`http://localhost:7071/admin/deletepack/${id}`,{responseType:'text' as 'json'});
  }

  deleteRating(id:number){
    return this.http.delete(`http://localhost:7071/admin/deleterating/${id}`,{responseType:'text' as 'json'});
  }

  deleteWasher(id:number){
    return this.http.delete(`http://localhost:9090/washer/delete/${id}`,{responseType:'text' as 'json'});
  }
  // deleteCarDetails(id:string){
  //   return this.http.delete(`http://localhost:8080/admin/delete_cardetails/${id}`,{responseType:'text' as 'json'});
  // }
  // deletePromos(id:string){
  //   return this.http.delete(`http://localhost:8080/admin/delete_promo/${id}`,{responseType:'text' as 'json'});
  // }
}
