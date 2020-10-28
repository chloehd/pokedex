import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonDetails } from '../pokemon';
import { PokeApiService } from '../pokeApi.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemonLink: string;
  onePokemon: PokemonDetails;
  pokemonOrder: number;
  pokemonImg: string;
  pokemonName: string;
  pokemonAbilities: PokemonDetails['abilities'];
  pokemonStats: any;
  pokemonMoves: any;
  pokemonTypes: any;
  public pokemonDetailsLink: any;


  constructor(
    public route: ActivatedRoute,
    private pokemonService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemonId();
  }

  getPokemonId() {
    this.pokemonDetailsLink = this.route.params.subscribe(params => {
      this.pokemonService
        .getPokemonUrlByName(params.name)
        .subscribe((data: any) => {
          this.pokemonName = data.name;
          this.pokemonOrder = data.order;
          this.pokemonImg = data.sprites.front_default;
          this.pokemonAbilities = data.abilities;
          this.pokemonStats = data.stats;
          this.pokemonMoves = data.moves;
          this.pokemonTypes = data.types;
          this.onePokemon = data;
        });
    });
  }
}
