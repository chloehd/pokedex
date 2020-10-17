import {Component, Input, OnInit} from '@angular/core';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  @Input() pokemonList: Pokemon['results'];

  constructor(
  ) {}

  ngOnInit(): void {
  }

}
