import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products:Product[]=[]
  constructor(private productService:ProductService , private httpClient:HttpClient)
  {

  }

  ngOnInit(): void 
  {
      this.productService.getProducts().subscribe(data => 
      {
        this.products = data;
      }
      )

  }

}
