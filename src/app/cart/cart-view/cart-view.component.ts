import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
cartItems:Product[] =[]
totalPrice:number=0;
constructor(private cartService:CartService)
{

}
ngOnInit(): void {
    this.cartService.GetCartItems().subscribe(data=>
    {
      this.cartItems=data;
      let total =0;
      for(let item of this.cartItems)
        {
          total+=item.price;
        }
      this.totalPrice=total;    
    }
    )}

    clearCart()
    {
      this.cartService.ClearCart().subscribe(()=>alert("cart Cleared"));
    }
    checkOut():void
    {
        this.cartService.checkOut(this.cartItems).subscribe(()=>{
          alert("checkout done");
        })
    }

}

