import { Component, Input, OnInit } from '@angular/core';

import { Pokemon, PokemonDetails } from '../pokemon';
import { PokeApiService } from '../pokeApi.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  @Input() pokemonList: Pokemon['results'];
  onePokemon: PokemonDetails[];
  pokemonImg: string;

  constructor(
    private pokemonService: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.getPokemonUrl(this.pokemonList['url']);
  }

  getPokemonUrl(url) {
    this.pokemonService
      .getPokemonUrl(url)
      .subscribe((result: any) => {
        this.onePokemon = result;
        this.pokemonImg = result.sprites.front_default;
        return result;
      })
  }

}
