import axios from "axios";
import { Pokemon } from "../components/Layout/Body";
import { PokemonType } from "../components/Layout/Body";

interface Request {
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
}

export const api = axios.create({
  baseURL:'https://pokeapi.co/api/v2/'
})


export async function getAllPokemons() {
  const response = await api.get("/pokemon?offset=0&limit=9");
  const { results } = response.data;

  const payloadPokemons = await Promise.all(
    results.map(async (pokemon: Pokemon) => {
      const { id, types, height, weight } = await getMoreInfo(pokemon.url);

      return {
        name: pokemon.name,
        id,
        types,
        height,
        weight,
      };
    })
  );
  return payloadPokemons;
}

async function getMoreInfo(url: string): Promise<Request> {
  const response = await api.get(url);
  const { id, types, height, weight } = response.data;

  return { id, types, height, weight };
}