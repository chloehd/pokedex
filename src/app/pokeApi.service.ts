import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) {
    this.init();
  }

  init() {
  }

  getPokemonList(id: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.url}?offset=${id}&limit=${limit}`);
  }
}


