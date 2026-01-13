import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SELECTION_LIST } from '@angular/material/list';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products:Product[]=[]
  filteredProducts:Product[]=[];
  sortOrder:string ="";
  constructor(private productService:ProductService , private httpClient:HttpClient, private cartService:CartService, private snackBar:MatSnackBar)
  {

  }

  ngOnInit(): void 
  {
      this.productService.getProducts().subscribe(data => 
      {
        this.products = data;
        this.filteredProducts=data;
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

  applyFilter(event:Event):void
  {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm= searchTerm.toLowerCase();
    this.filteredProducts=this.products.filter(product=>product.name.toLowerCase().includes(searchTerm));
    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue:string)
  {
    this.sortOrder=sortValue;
    if(this.sortOrder==="priceLowHigh")
    {
        this.filteredProducts.sort((a,b)=>a.price-b.price)
    }
    else if(this.sortOrder==="priceHighLow")
    {
        this.filteredProducts.sort((a,b)=>b.price-a.price)
    }
    else if(this.sortOrder==="nameAscending")
    {
        this.filteredProducts.sort((a,b)=>a.name.localeCompare(b.name))
    }
    else if(this.sortOrder==="nameDescending")
    {
        this.filteredProducts.sort((a,b)=>b.name.localeCompare(a.name))
    }
  }
 

}
