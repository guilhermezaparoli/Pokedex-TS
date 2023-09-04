import { CardType } from "../CardType";
import { SearchContainer, TypeSearch, Types } from "./styles";
import BugType from "../../assets/pokemonTypes/bug.svg"

export function Search() {
  return(
    <SearchContainer>
      <TypeSearch>
        <p>Pesquisar por tipos</p>
        <Types>
          <CardType value="Bug" icon={BugType}/>
        </Types>
      </TypeSearch>
    </SearchContainer>
  )
}