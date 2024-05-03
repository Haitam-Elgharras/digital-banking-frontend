import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<customer>>{
    return this.http.get<Array<customer>>('http://localhost:8084/customers');
  }

  public searchCustomers(keyword: any) {
    return this.http.get<Array<customer>>(`http://localhost:8084/customers/searchCustomer?keyword=${keyword}`);
  }
}
