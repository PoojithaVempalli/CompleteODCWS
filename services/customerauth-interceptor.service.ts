import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CustomerauthInterceptorService  implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("-------------Interceptor--------");

    if(localStorage.getItem('username') && localStorage.getItem('token')){

      req= req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token') || ''
        }
      })
      console.log("user checker: " + localStorage.getItem('token'));
    }
    return next.handle(req);
  }
}
