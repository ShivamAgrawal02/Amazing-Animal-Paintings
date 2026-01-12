import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl= environment.apiUrl +"/Products";

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
