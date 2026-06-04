import { Injectable } from '@angular/core';
import {Beer} from './interfaces/beer.interface';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeerService {

  constructor(private http: HttpClient) {
  }

  fetchBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://66521586813d78e6d6d49284.mockapi.io/beers')
      .pipe(
        map((beers: Beer[]) =>
          beers.map((b) =>
            ({ ...b, quantity: 0 }))))
  }

  patch(beer: Beer): Observable<Beer> {
    return this.http.put<Beer>(`https://66521586813d78e6d6d49284.mockapi.io/beers/${beer.id}`, beer);
  }
}
