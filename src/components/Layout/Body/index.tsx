import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { CardPokemon } from "../../CardPokemon";
import {
  ButtonSearch,
  ContainerCards,
  ContainerDivider,
  DividerLeft,
  DividerRight,
  InputSearch,
  InputSearchContainer,
  SearchContainer,
  StyledContainerBody,
  StyledPokeballIcon,
  TypeSearch,
  Types,
} from "./styles";
import {
  StatsInterface,
  fetchPokemonBySearch,
  fetchPokemonByType,
  getAllPokemons,
} from "../../../api/api";
import { CardType } from "../../CardType";
import IconSearch from "../../../assets/icon-search.svg";
import PokeballIcon from "../../../assets/pokeball-icon-colored.svg";
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
  stats: StatsInterface[];
  pokemon: {
    name: string;
    url: string;
  };
}

export function Body() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [isSelected, setIsSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const types = [
    "fire",
    "flying",
    "bug",
    "dark",
    "dragon",
    "electric",
    "grass",
    "poison",
    "fairy",
    "fighting",
    "ghost",
    "ground",
    "ice",
    "normal",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  function handleCardTypeClick(index: number) {
    const newSelected = isSelected.map((_, i) => i === index);

    setIsSelected(newSelected);

    if (isSelected[index] === true) {
      const newSelected = [...isSelected];
      newSelected[index] = false;
      fetchData()


      setIsSelected(newSelected);
    }
  }


  async function fetchData() {
    try {
      const data = await getAllPokemons();
      setPokemons(data);
    } catch (error) {
      console.error("Erro ao buscar os pokémons:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function HandleFetchByType(type: string) {
    setPokemons(await fetchPokemonByType(type));
  }

  const [searchByUser, setSearchByUser] = useState<string>('')

async function HandleSubmit(e: FormEvent) {
  e.preventDefault()

  if(!searchByUser) {
    fetchData()
  } else {
    try {
      const data = await fetchPokemonBySearch(searchByUser);
      setPokemons([data]);
    } catch (error) {
      console.error("Erro ao buscar os pokémons:", error);
    }
    
  }
  
}

console.log(pokemons, "searchhh")

  return (
    <StyledContainerBody>
      <SearchContainer>
        <InputSearchContainer>
          <form action="" onSubmit={(e) => HandleSubmit(e)}>
            <InputSearch type="text" placeholder="Search your pokémon" onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchByUser(e.target.value)} />
            <ButtonSearch>
              <img src={IconSearch} alt="icone de lupa" />
            </ButtonSearch>
          </form>
        </InputSearchContainer>
        <TypeSearch>
          <p>Search by types</p>
          <Types>
            {types.map((type, index) => {
              return (
                <CardType
                  value={type}
                  isSelected={isSelected[index]}
                  onClick={() => {
                    handleCardTypeClick(index);
                    !isSelected[index] && HandleFetchByType(type);
                  }}
                />
              );
            })}
          </Types>
        </TypeSearch>
      </SearchContainer>

      <ContainerDivider>
        <DividerLeft />
        <StyledPokeballIcon src={PokeballIcon} alt="" />
        <DividerRight />
      </ContainerDivider>

      <ContainerCards>
        {pokemons.map((pokemon) => (
          <CardPokemon pokemonData={pokemon} />
        ))}
      </ContainerCards>
    </StyledContainerBody>
  );
}
