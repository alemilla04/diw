import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardPokemonComponent } from '../components/card-pokemon/card-pokemon.component';
import { CarrouselPokemonsComponent } from '../components/carrousel-pokemons/carrousel-pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardPokemonComponent, CarrouselPokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-01-30-angular-a';
}
