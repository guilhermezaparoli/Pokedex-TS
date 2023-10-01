import axios from "axios";
import { Pokemon } from "../components/Layout/Body";
import { PokemonType } from "../components/Layout/Body";

export interface StatsInterface {
  base_stat: number;
  stat: {
    name: string;
  };
}
interface Request {
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  stats: StatsInterface[];
}

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function getAllPokemons(offset: number) {
  const response = await api.get(`/pokemon?offset=${offset}&limit=9`);
  const { results } = response.data;
  const payloadPokemons = await Promise.all(
    results.map(async (pokemon: Pokemon) => {
      const { id, types, height, weight, stats } = await getMoreInfo(
        pokemon.url
      );

      for (const name of stats) {
        switch (name.stat.name) {
          case "hp":
            name.stat.name = "HP";
            break;
          case "attack":
            name.stat.name = "Attack";
            break;
          case "defense":
            name.stat.name = "Defense";
            break;
          case "special-attack":
            name.stat.name = "Sp. Atk";
            break;
          case "special-defense":
            name.stat.name = "Sp. Def";
            break;
          case "speed":
            name.stat.name = "Speed";
            break;
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

// interface fetchPokemonByTypeProps {
//   type: 'fire' | 'flying' | 'bug' | 'dark' | 'dragon' | 'electric' | 'grass' | 'poison'| 'water' | 'fairy' |'fighting' |'ghost' |'ground'| 'ice' | 'normal'|'psychic'| 'rock' | 'steel'
// }

export async function fetchPokemonByType(typeName: string) {
  const response = await api.get(`/type/${typeName}`);
  const { pokemon } = response.data;

  console.log(pokemon);

  const payloadPokemonType = await Promise.all(
    pokemon.map(async (pokemonType: Pokemon) => {
      const { id, types, height, weight, stats } = await getMoreInfo(
        pokemonType.pokemon.url
      );
      console.log(pokemonType,pokemon, "aquii");
      for (const name of stats) {
        switch (name.stat.name) {
          case "hp":
            name.stat.name = "HP";
            break;
          case "attack":
            name.stat.name = "Attack";
            break;
          case "defense":
            name.stat.name = "Defense";
            break;
          case "special-attack":
            name.stat.name = "Sp. Atk";
            break;
          case "special-defense":
            name.stat.name = "Sp. Def";
            break;
          case "speed":
            name.stat.name = "Speed";
            break;
        }
      }

      return {
        name: pokemonType.pokemon?.name,
        id,
        types,
        height,
        weight,
        stats,
      };
    })
  );
  return payloadPokemonType;
}

export async function fetchPokemonBySearch(pokemonName: string){
  const response = await api.get(`/pokemon/${pokemonName}`);
  const { id, types, height, weight, stats, url, pokemon } = response.data

  for (const name of stats) {
    switch (name.stat.name) {
      case "hp":
        name.stat.name = "HP";
        break;
      case "attack":
        name.stat.name = "Attack";
        break;
      case "defense":
        name.stat.name = "Defense";
        break;
      case "special-attack":
        name.stat.name = "Sp. Atk";
        break;
      case "special-defense":
        name.stat.name = "Sp. Def";
        break;
      case "speed":
        name.stat.name = "Speed";
        break;
    }
  }
  const payloadPokemonSearch = {
    name: response.data.name,
    id,
    types,
    height,
    weight,
    stats,
    url,
    pokemon
  };

  return payloadPokemonSearch


}