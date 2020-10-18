import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailComponent } from "../app/pokemon-detail/pokemon-detail.component";


const routes: Routes = [
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
