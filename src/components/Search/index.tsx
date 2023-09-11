import { CardType } from "../CardType";
import {
  ButtonSearch,
  InputSearch,
  InputSearchContainer,
  SearchContainer,
  TypeSearch,
  Types,
  StyledPokeballIcon,
  ContainerDivider,
  DividerLeft,
  DividerRight,
} from "./styles";

import IconSearch from "../../assets/icon-search.svg";
import PokeballIcon from "../../assets/pokeball-icon-colored.svg";


export function Search() {

    





  return (
    <>
      <SearchContainer>
        <InputSearchContainer>
          <form action="">
            <InputSearch type="text" placeholder="Search your pokémon" />
            <ButtonSearch>
              <img src={IconSearch} alt="icone de lupa" />
            </ButtonSearch>
          </form>
        </InputSearchContainer>
        <TypeSearch>
          <p>Search by types</p>
          <Types>
            <CardType value="fire" />
            <CardType value="flying" />
            <CardType value="bug" />
            <CardType value="dark" />
            <CardType value="dragon" />
            <CardType value="electric" />
            <CardType value="grass" />
            <CardType value="poison" />
            <CardType value="fairy" />
            <CardType value="fighting" />
            <CardType value="ghost" />
            <CardType value="ground" />
            <CardType value="ice" />
            <CardType value="normal" />
            <CardType value="psychic" />
            <CardType value="rock" />
            <CardType value="steel" />
          </Types>
        </TypeSearch>
      </SearchContainer>

      <ContainerDivider>
        <DividerLeft />
        <StyledPokeballIcon src={PokeballIcon} alt="" />
        <DividerRight />
      </ContainerDivider>
    </>
  );
}
