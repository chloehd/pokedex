export interface Pokemon {
  count: number;
  next: string;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  abilities: Array<any>;
  sprites: string[];
  types: string[];
  order: number;
  stats: string[];
  species: string[];
  moves: string[];
}



// The Details-Page should display:
//
/// picture / sprites {https://pokeapi.co/api/v2/pokemon/1 .sprites.front_default}
/// name {https://pokeapi.co/api/v2/pokemon/1 .name}
/// abilities get {https://pokeapi.co/api/v2/pokemon/1 .abilities[] }
/// type {https://pokeapi.co/api/v2/pokemon/1 .types[] }
/// order-number {https://pokeapi.co/api/v2/pokemon/1  .order }
/// stats {https://pokeapi.co/api/v2/pokemon/1  .stats[] }
/// possible evolutions {https://pokeapi.co/api/v2/pokemon/1
// .species[].evolution_chain.url chain.evolves_to.evolution_details.trigger.name recursive on evolves_to}
/// moves {https://pokeapi.co/api/v2/pokemon/1  .moves[] }
// everything is on this address https://pokeapi.co/api/v2/pokemon/{id or name}/
