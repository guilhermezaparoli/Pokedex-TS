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
import { useState } from "react";


export function Search() {
  const [isSelected, setIsSelected] = useState([false, false, false, false,false, false, false, false,false, false, false, false,false, false, false, false,false, false])

  function handleCardTypeClick(index: number) {
    console.log(index)
    const newSelected = isSelected.map((_, i) => i === index);
    setIsSelected(newSelected);

  }
  console.log(isSelected)



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
            <CardType value="fire" isSelected={isSelected[0]} onClick={() => handleCardTypeClick(0)} />
            <CardType value="flying" isSelected={isSelected[1]} onClick={() => handleCardTypeClick(1)} />
            <CardType value="bug" isSelected={isSelected[2]} onClick={() => handleCardTypeClick(2)} />
            <CardType value="dark" isSelected={isSelected[3]} onClick={() => handleCardTypeClick(3)} />
            <CardType value="dragon" isSelected={isSelected[4]} onClick={() => handleCardTypeClick(4)}/>
            <CardType value="electric" isSelected={isSelected[5]} onClick={() => handleCardTypeClick(5)}/>
            <CardType value="grass" isSelected={isSelected[6]} onClick={() => handleCardTypeClick(6)}/>
            <CardType value="poison" isSelected={isSelected[7]} onClick={() => handleCardTypeClick(7)}/>
            <CardType value="fairy" isSelected={isSelected[8]} onClick={() => handleCardTypeClick(8)}/>
            <CardType value="fighting" isSelected={isSelected[9]} onClick={() => handleCardTypeClick(9)}/>
            <CardType value="ghost" isSelected={isSelected[10]} onClick={() => handleCardTypeClick(10)}/>
            <CardType value="ground" isSelected={isSelected[11]} onClick={() => handleCardTypeClick(11)}/>
            <CardType value="ice" isSelected={isSelected[12]} onClick={() => handleCardTypeClick(12)}/>
            <CardType value="normal" isSelected={isSelected[13]} onClick={() => handleCardTypeClick(13)}/>
            <CardType value="psychic" isSelected={isSelected[14]} onClick={() => handleCardTypeClick(14)}/>
            <CardType value="rock" isSelected={isSelected[15]} onClick={() => handleCardTypeClick(15)}/>
            <CardType value="steel" isSelected={isSelected[16]} onClick={() => handleCardTypeClick(16)}/>
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
