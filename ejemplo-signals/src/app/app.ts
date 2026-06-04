import {Component, computed, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BeerList} from './beer-list/beer-list';
import {CartList} from './cart-list/cart-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BeerList, CartList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
