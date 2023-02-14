import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  Isexist(id:any){
    let url = `http://localhost:8080/user/userexist/${id}`;
    return this.http.get(url,{responseType:'text' as 'json'});
  }

  createOrder(order:any): Observable<any> {
		return this.http.post("http://localhost:8899/paymentgateway/createOrder", {
		customerName: "poojitha",
		email: "poojitha@gmail.com",
		phoneNumber: order.phoneNo,
		amount: order.cost
		}, httpOptions);
	}

  getOrdersData(){
    let url = 'http://localhost:8081/order/allorders';
    return this.http.get(url);
  }

  getWashpacksData(){
    let url = 'http://localhost:8080/user/allpacks';
    return this.http.get(url);
  }

  getAddOns(){
    let url = 'http://localhost:8082/user/view_addons';
    return this.http.get(url);
  }

  getpromos(){
    let url = 'http://localhost:8082/user/view_promos';
    return this.http.get(url);
  }

  getOrdersForUser(username:string){
    let url = `http://localhost:8082/user/view_orders/${username}`
    return this.http.get(url);
  }

  getCarDetails(){
    let url = 'http://localhost:8082/user/view_cardetails';
    return this.http.get(url);
  }

  postRegistration(customer:any){
    return this.http.post('http://localhost:8080/user/adduser',customer,{responseType:'text' as 'json'})
    
  }

  Isexistbyname(name:any){
    let url = `http://localhost:8080/user/userexistbyname/${name}`;
    return this.http.get(url,{responseType:'text' as 'json'});
  }
  
  postRating(rating:any){
   return this.http.post('http://localhost:7071/admin/addrating',rating,{responseType:'text' as 'json'})
  }

  delete(id:string){
    return this.http.delete(`http://localhost:8081/order/delete/${id}`,{responseType:'text' as 'json'});
  }

  getWashPackPrice(id:number){
    console.log(id)
    return this.http.get(`http://localhost:7071/admin/packcost/${id}`);
  }

  postOrder(order:any){
   return this.http.post('http://localhost:8081/order/addorder',order,{responseType:'text' as 'json'})
  }
  postPayment(payment:any){
    return this.http.post('http://localhost:9191/payment/addpayment', payment, {responseType:'text' as 'json'})
  }
  updateorderstatus(order:any){
    return this.http.put(`http://localhost:8081/order/update/orderStatus/${order.orderId}`, order, {responseType:'text' as 'json'})
  }

} 

