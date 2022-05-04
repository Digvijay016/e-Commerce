import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Comics } from '../shared/models/comic';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  
  addToCart(comic:Comics):void{
    let cartItem = this.cart.items.find(item => item.comic.id === comic.id);

    if(cartItem){
      this.changeQuantity(comic.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(comic));
  }

  removeFromCart(comicId:number):void{
    this.cart.items = this.cart.items.filter(item => item.comic.id != comicId)
  }

  emptyFromCart():void{
    this.cart.items = [];
  }

  changeQuantity(quantity:number, comicId:number){
    let cartItem = this.cart.items.find(item => item.comic.id === comicId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    
    // console.log("Here:"+cartItem.quantity);
  }

  getCart():Cart{
    return this.cart;
  }
}
