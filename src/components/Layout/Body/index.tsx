import { useEffect, useState } from "react";

import { CardPokemon } from "../../CardPokemon";
import { ContainerCards, StyledContainerBody } from "./styles";
import { StatsInterface, getAllPokemons } from "../../../api/api";

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: StatsInterface[]
}


export function Body() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllPokemons();
        setPokemons(data);
      } catch (error) {
        console.error('Erro ao buscar os pokémons:', error);
      }
    }

    fetchData();
  }, []);

  
  return (
    <StyledContainerBody>
      <ContainerCards>
        {pokemons.map((pokemon) => (
          <CardPokemon pokemonData={pokemon}/>
        ))}
      </ContainerCards>
    </StyledContainerBody>
  );
}
