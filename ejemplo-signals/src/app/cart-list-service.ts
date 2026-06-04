import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Beer} from './interfaces/beer.interface';

//TODO: Implementar el servicio de la lista de carrito con signals en la clase
@Injectable({
  providedIn: 'root',
})
export class CartListService {
  _cartList: Beer[] = [];
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);

  constructor() { }

  addBeer(beer: Beer){
    const index = this._cartList.findIndex(b => b.id === beer.id);
    if (index >= 0) {
      this._cartList[index].quantity++;
      this.cartList.next(this._cartList)
      return;
    }
    beer.quantity = 1;
    this._cartList.push(beer);
    this.cartList.next(this._cartList)
  }
}
