import axios from "axios";
import { Pokemon } from "../components/Layout/Body";
import { PokemonType } from "../components/Layout/Body";


export interface StatsInterface { 
  base_stat: number,
  stat: {
    name: string
  }
}
interface Request {
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  stats: StatsInterface[];
}

export const api = axios.create({
  baseURL:'https://pokeapi.co/api/v2/'
})


export async function getAllPokemons() {
  const response = await api.get("/pokemon?offset=0&limit=9");
  const { results } = response.data;

  const payloadPokemons = await Promise.all(
    results.map(async (pokemon: Pokemon) => {
      const { id, types, height, weight, stats } = await getMoreInfo(pokemon.url);


      for(const name of stats) {
        console.log(name)
        switch(name.stat.name) {
          case 'hp': 
          name.stat.name = "HP"
          break
          case 'attack': 
          name.stat.name = "Attack"
          break
          case 'defense': 
          name.stat.name = "Defense"
          break
          case 'special-attack': 
          name.stat.name = "Sp. Atk"
          break
          case 'special-defense': 
          name.stat.name = "Sp. Def"
          break
          case 'speed': 
          name.stat.name = "Speed"
          break
        }
      }

      return {
        name: pokemon.name,
        id,
        types,
        height,
        weight,
        stats,
      };
    })
  );
  return payloadPokemons;
}

async function getMoreInfo(url: string): Promise<Request> {
  const response = await api.get(url);
  const { id, types, height, weight, stats } = response.data;

  return { id, types, height, weight, stats };

}