import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = environment.apiUrl + "/cart";
  private apiCheckOutUrl = environment.apiUrl + "/checkout";
  constructor(private httpClient:HttpClient) 
  { 

  }
  AddToCart(product:Product):Observable<Product>
  {
    return this.httpClient.post<Product>(this.apiCartUrl,product);
  }
  GetCartItems():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.apiCartUrl);
  }
  ClearCart():Observable<void>
  {
    return this.httpClient.delete<void>(this.apiCartUrl);
  }
  checkOut(product:Product[]):Observable<void>
  {
      return this.httpClient.post<void>(this.apiCheckOutUrl,product);
  }

  
}

