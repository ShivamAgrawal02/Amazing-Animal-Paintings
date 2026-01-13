import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products:Product[]=[]
  constructor(private productService:ProductService , private httpClient:HttpClient, private cartService:CartService, private snackBar:MatSnackBar)
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
  AddToCart(product:Product)
  {
      this.cartService.AddToCart(product).subscribe({next:()=>{
        this.snackBar.open("Product Added To Cart"," ",{
          duration:2000,
          horizontalPosition:"right",
          verticalPosition:"top"
        })
      }});
  }

}
