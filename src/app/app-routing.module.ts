import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  {path:"pokemony", component:PokemonsComponent},
  {path: "",redirectTo: 'pokemony', pathMatch: 'full'},
  {path: 'pokemon/:id', component:PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
