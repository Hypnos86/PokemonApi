import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}



  addPokemon(pokemonName: string):void{
    const KEY_Pokemon = "ulubionePokemony"
   
    let savedPokemons = localStorage.getItem(KEY_Pokemon);
    let pokemonsList: string[] = savedPokemons !== null? JSON.parse(savedPokemons) : [];
    
    pokemonsList.push(pokemonName);

    localStorage.setItem(KEY_Pokemon, JSON.stringify(pokemonsList));
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });

   
  }

  

}
