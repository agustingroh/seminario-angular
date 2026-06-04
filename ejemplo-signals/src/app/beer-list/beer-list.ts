import { Component } from '@angular/core';
import {BeerService} from '../beer-service';
import {CartListService} from '../cart-list-service';
import {Beer} from '../interfaces/beer.interface';

@Component({
  selector: 'app-beer-list',
  imports: [],
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.css',
})
export class BeerList {
  beers: Beer[] = [];
  constructor(private beerService: BeerService, private cartList: CartListService) {
   this.beerService.fetchBeers().subscribe((beers: Beer[])=>{
      this.beers = beers;
    });
  }

  addBeer(beer: Beer){
    beer.stock--;
    this.cartList.addBeer(beer);
    this.beerService.patch(beer).subscribe((updated: Beer) => {
      this.beers = this.beers.map(b => b.id === updated.id ? updated : b);
    });

  }

}
