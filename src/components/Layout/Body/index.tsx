import { FormEvent, useEffect, useState } from "react";

import GifPikachuCrying from "../../../assets/gif/pikachu-crying.gif";

import { CardPokemon } from "../../CardPokemon";
import {
  ButtonSearch,
  ContainerCards,
  ContainerDivider,
  ContainerGif,
  DividerLeft,
  DividerRight,
  InputSearch,
  InputSearchContainer,
  LoadMore,
  MainContainerCards,
  PokemonNotFound,
  SearchContainer,
  StyledContainerBody,
  StyledLoader,
  StyledPokeballIcon,
  TextPokemonNotFound,
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
import { STATUS_COLORS } from "../../CardType/styles";
export interface PokemonType {
  type: {
    name:
      | "bug"
      | "dark"
      | "electric"
      | "fairy"
      | "fighting"
      | "dragon"
      | "fire"
      | "flying"
      | "ghost"
      | "grass"
      | "ground"
      | "ice"
      | "normal"
      | "poison"
      | "psychic"
      | "rock"
      | "steel"
      | "water";
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
  const [loading, setLoading] = useState<boolean>(true);
  const [searchByUser, setSearchByUser] = useState<string>("");
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
  const [numberPokemonToShowOffset, setNumberPokemonToShowOffset] =
    useState<number>(0);

  function handleCardTypeClick(index: number) {
    const newSelected = isSelected.map((_, i) => i === index);

    setIsSelected(newSelected);

    if (isSelected[index] === true) {
      const newSelected = [...isSelected];
      newSelected[index] = false;
      setPokemons([]);
      fetchData();

      setIsSelected(newSelected);
    }
  }

  function resetCardTypeClicked() {
    const newArr = isSelected.map((item) => {
      if (item) {
        return (item = false);
      } else {
        return (item = false);
      }
    });
    setIsSelected(newArr);
  }

  async function fetchData() {
    // setLoading(true);
    console.log(searchByUser, "useerr");
    try {
      const data = await getAllPokemons(numberPokemonToShowOffset);
      if (searchByUser.length || numberPokemonToShowOffset !== 0) {
        const loadPokemons = [...pokemons, ...data];
        setPokemons(loadPokemons);
      } else {
        const loadPokemons = [...data];
        setPokemons(loadPokemons);
      }
    } catch (error) {
      console.error("Erro ao buscar os pokémons:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function HandleFetchByType(type: string) {
    setLoading(true);
    setPokemonNotFound(false);
    try {
      const response = await fetchPokemonByType(type);
      setPokemons(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const [pokemonNotFound, setPokemonNotFound] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    resetCardTypeClicked();
    setPokemonNotFound(false);
    setNumberPokemonToShowOffset(0);
    if (searchByUser.length <= 0) {
      setPokemons([]);
      fetchData();
    } else {
      setLoading(true);
      try {
        const data = await fetchPokemonBySearch(searchByUser);
        console.log(data, "data");
        setPokemons([data]);
        setPokemonNotFound(false);
      } catch (error) {
        setPokemonNotFound(true);
        console.error("Erro ao buscar os pokémons:", error);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [numberPokemonToShowOffset]);

  function increaseNumberPokemonToShow() {
    setNumberPokemonToShowOffset((state) => state + 9);
  }

  return (
    <StyledContainerBody>
      <SearchContainer>
        <InputSearchContainer>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <InputSearch
              type="text"
              placeholder="Search your pokémon"
              onChange={(e) => setSearchByUser(e.target.value.toLowerCase())}
              value={searchByUser}
            />
            <ButtonSearch type="submit">
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
                  key={index}
                  value={type as keyof typeof STATUS_COLORS}
                  isSelected={isSelected[index]}
                  onClick={() => {
                    handleCardTypeClick(index);
                    !isSelected[index] && HandleFetchByType(type);
                    setSearchByUser("");
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
      {loading && !pokemonNotFound ? (
        <StyledLoader style={{ display: "flex", justifyContent: "center" }}>
          <span className="loader" />{" "}
        </StyledLoader>
      ) : !loading && !pokemonNotFound ? (
        <>
          <ContainerCards>
            {pokemons.map((pokemon) => (
              <CardPokemon pokemonData={pokemon} />
            ))}
          </ContainerCards>
{console.log(pokemons.length)}
          {pokemons.length === 1 || (
            <MainContainerCards>
              <LoadMore onClick={increaseNumberPokemonToShow}>
                Load more
              </LoadMore>
            </MainContainerCards>
          )}
        </>
      ) : (
        <PokemonNotFound>
          <ContainerGif>
            <img src={GifPikachuCrying} alt="" />
          </ContainerGif>
          <TextPokemonNotFound>Sorry, pokemon not found!</TextPokemonNotFound>
        </PokemonNotFound>
      )}
    </StyledContainerBody>
  );
}
