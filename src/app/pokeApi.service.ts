import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonDetails } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  getPokemonList(id: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.url}?offset=${id}&limit=${limit}`);
  }

  getPokemonUrl(onePokeUrl: string): Observable<PokemonDetails[]> {
    return this.http.get<PokemonDetails[]>(`${onePokeUrl}`);
  }

  getPokemonUrlByName(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.url}/${name}`);
  }
}
