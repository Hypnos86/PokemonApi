import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{

  pokemon?: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
        const id = +idParam;
      this.getPokemon(id);
    } else {
  // Obsługa sytuacji, gdy brakuje parametru "id" w adresie URL
    }

    
  }

  getPokemon(id: number): void {
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }
}

// const id = +this.route.snapshot.paramMap.get('id');
// this.getPokemon(id);

// }