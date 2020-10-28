import { Component, OnInit } from '@angular/core';

import { PokemonDetails, Results } from '../pokemon';
import { PokeApiService } from '../pokeApi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Results[];
  offset = 0;
  limit = 50;
  next: string;
  onePokemon: PokemonDetails[];
  pokemonImg: string;
  pokemonLink: string;

  constructor(
    private pokemonService: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((result: any) => {
        this.pokemonList = result.results;
        return this.pokemonList;
      });
  }

  getPokemonDetails(url) {
    this.pokemonService
      .getPokemonUrl(url)
      .subscribe((result: any) => {
        console.log(result);
        this.onePokemon = result;
        this.pokemonImg = result.sprites.front_default;
        return result;
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
