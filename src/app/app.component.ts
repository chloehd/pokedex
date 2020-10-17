import { Component } from '@angular/core';
import { PokeApiService } from './pokeApi.service';
import { Pokemon, PokemonDetails } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';
  pokemonList: Pokemon['results'];
  pokemonDetails: PokemonDetails;
  offset: number = 0;
  limit: number = 50;
  next: string;
  id: string[];

  constructor(
    private pokemonService: PokeApiService,
  ) {
    this.init();
  }

  init(): void {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((result: any) => {
        this.id = Object.keys(result.results);
        console.log(this.id);
        return this.pokemonList = result.results;
      });
  }

  getNextPokemons(next) {
    if (next !== null) {
      this.offset += this.limit;
      this.pokemonService
        .getPokemonList(this.offset, this.limit)
        .subscribe((result: any) => {
          console.log('next pokemons', result);
          this.pokemonList = result.results;
          return result;
        });
    }
  }
} 
