import { Component } from '@angular/core';
import { PokeApiService } from './pokeApi.service';
import { Results } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';
  pokemonList: Results[];
  offset = 0;
  limit = 50;
  next: string;

  constructor(
    private pokemonService: PokeApiService,
  ) {
    this.init();
  }

  init(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((result: any) => {
        return this.pokemonList = result.results;
      });
  }

  getNextPokemon(next: any) {
    if (next !== null) {
      this.offset += this.limit;
      this.getPokemonList();
    } else {
      this.offset = this.offset - this.limit;
    }
  }
}
