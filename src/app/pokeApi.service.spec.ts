import { TestBed } from '@angular/core/testing';

import { PokeApiService } from './pokeApi.service';

describe('PokemonService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
