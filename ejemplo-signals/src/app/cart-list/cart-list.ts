import { Component } from '@angular/core';
import {CartListService} from '../cart-list-service';
import {Beer} from '../interfaces/beer.interface';

@Component({
  selector: 'app-cart-list',
  imports: [],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.css',
})
export class CartList {
  beers: Beer[] = [];
  constructor(private cartListService: CartListService) {
    this.cartListService.cartList.subscribe((beers: Beer[])=>{
      this.beers = beers;
    });
  }

}
