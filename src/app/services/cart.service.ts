import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItemsState';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.id === product.id);
    if(item){
      item.quantity++;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c=>c.product.id === product.id);
    if(item){
      CartItems.splice(CartItems.indexOf(item),1);
    }
  }

  list():CartItem[]{
    return CartItems;
  }

}

