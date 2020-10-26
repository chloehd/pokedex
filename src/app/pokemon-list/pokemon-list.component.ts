import { Component, Input, OnInit } from '@angular/core';

import { PokemonDetails } from '../pokemon';
import { PokeApiService } from '../pokeApi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonName: string;
  @Input() pokemonLink: string;
  onePokemon: PokemonDetails[];
  pokemonImg: string;

  constructor(
    private pokemonService: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.getPokemonDetails(this.pokemonLink);
    this.getPokemonUrlByName(this.pokemonName);
  }

  getPokemonDetails(url) {
    this.pokemonService
      .getPokemonUrl(url)
      .subscribe((result: any) => {
        this.onePokemon = result;
        this.pokemonImg = result.sprites.front_default;
        return result;
      });
  }

  getPokemonUrlByName(name) {
    this.pokemonService
      .getPokemonUrlByName(name)
      .subscribe((result: any) => {
        return result;
      });
  }
}
