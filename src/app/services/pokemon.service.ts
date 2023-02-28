import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=1008`).pipe(
      map(res => {
        return res.results.map((pokemon: any, index: number) => {
          const id = index + 1;
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          const types = pokemon.url.split('/')[6];
          return { id, image, types, ...pokemon };
        });
      })
    );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/${id}`;
    return this.http.get<any>(url).pipe(
      map(res => {
        const pokemon: Pokemon = {
          id: res.id,
          name: res.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png`,
          types: res.types.map((t: { type: { name: any; }; }) => t.type.name).join(', '),
          height: res.height / 10,
          weight: res.weight / 10,
          base_experience: 0,
          abilities: res.abilities.map((x: { ability: { name: any; }; }) => x.ability.name),
          forms: res.forms.map((x: { name: any; }) => x.name),
          moves: res.moves.map((x: { move: { name: any; }; }) => x.move.name),
          url: ''
        };
        return pokemon;
      })
    ) as Observable<Pokemon>;
  }
  
}
