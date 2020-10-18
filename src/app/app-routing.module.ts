import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsComponent } from "../app/pokemons/pokemons.component";
import { PokemonDetailComponent } from "../app/pokemon-detail/pokemon-detail.component";


const routes: Routes = [
  { path: '', component: PokemonsComponent, pathMatch: 'full' },
  { path: 'pokemon', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
