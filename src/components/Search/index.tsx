import { CardType } from "../CardType";
import { ButtonSearch, InputSearch, InputSearchContainer, SearchContainer, TypeSearch, Types } from "./styles";
import BugType from "../../assets/pokemonTypes/bug.svg"
import FireType from "../../assets/pokemonTypes/fire.svg"
import FlyingType from "../../assets/pokemonTypes/flying.svg"
import DarkType from "../../assets/pokemonTypes/dark.svg"
import DragonType from "../../assets/pokemonTypes/dragon.svg"
import EletricType from "../../assets/pokemonTypes/electric.svg"
import GrassType from "../../assets/pokemonTypes/grass.svg"
import PoisonType from "../../assets/pokemonTypes/poison.svg"
import WaterType from "../../assets/pokemonTypes/water.svg"
import IconSearch from "../../assets/icon-search.svg"

export function Search() {
  return(
    <SearchContainer>
      <TypeSearch>
        <p>Pesquisar por tipos</p>
        <Types>
          <CardType value="fire" icon={FireType}/>
          <CardType value="flying" icon={FlyingType}/>
          <CardType value="bug" icon={BugType}/>
          <CardType value="dark" icon={DarkType}/>
          <CardType value="dragon" icon={DragonType}/>
          <CardType value="eletric" icon={EletricType}/>
          <CardType value="grass" icon={GrassType}/>
          <CardType value="poison" icon={PoisonType}/>
          <CardType value="water" icon={WaterType}/>
        </Types>
      </TypeSearch>
      <InputSearchContainer>
      <form action="">
      <InputSearch type="text" placeholder="Pesquisar Pokémon"/>
      <ButtonSearch >
        <img src={IconSearch} alt="icone de lupa" />
      </ButtonSearch>
      </form>
      </InputSearchContainer>
    </SearchContainer>
  )
}