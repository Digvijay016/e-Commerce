import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ComicService } from '../services/comic/comic.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Comics } from '../shared/models/comic';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService,private router: Router) {
    this.setCart()
  }

  ngOnInit(): void {
  }

  setCart() {
    this.cart = this.cartService.getCart()
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.comic.id);
    this.setCart();
  }

  comicList(){
    this.router.navigate(['/']);
  }

  comicClick(item: CartItem){
    const Id = item ? item.comic.id: null;
    // console.log(Id);
    // console.log(['/comic/:', { id: Id }]);
    this.router.navigate(['/comic/:', { id: Id }]);
  }

  emptyFromCart() {
    this.cartService.emptyFromCart();
    this.setCart();
    this.router.navigate(['/']);
  }

  checkedOut(){
    this.cartService.emptyFromCart();
    this.setCart();
    this.router.navigate(['/checkout']);
  }

  totalProduct(cartItem: CartItem){
    console.log(cartItem.quantity);
    return cartItem.quantity;
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    // console.log(quantity);
    this.cartService.changeQuantity(quantity, cartItem.comic.id);
    this.setCart();
    // console.log(this.cart.items);
    // console.log(cartItem);
    // console.log()
  }

  selectedQuantity: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedQuantity = event.target.value;
  }

}
