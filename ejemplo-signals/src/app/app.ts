import {Component, computed, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  contador = signal(0);
  doble = computed(() => this.contador() * 2);
  constructor() {
    effect(() =>{
      if (this.doble() > 10)
        alert('El doble es mayor a 10')
    });
  }

  sumar() {
    this.contador.update(n => n + 1);
  }
}
