import { CardType } from "../CardType";
import {
  Card,
  Features,
  IconTextContainer,
  MoreDetails,
  PokemonHeight,
  PokemonId,
  PokemonImage,
  PokemonName,
  PokemonWeight,
  StyledMainContainer,
  Type,
} from "./styles";

import WeightIcon from "../../assets/icon-weight.svg";
import HeightIcon from "../../assets/icon-ruler.svg";
import BoltIcon from "../../assets/icon-bolt.svg"

import { Pokemon } from "../Layout/Body";
import axios from "axios";

interface CardPokemonProps {
  pokemonData: Pokemon
}


export function CardPokemon({pokemonData}: CardPokemonProps) {


  function formatedId(id: number) {
    return String(id).padStart(3, "0")
  }

  

  async function  initFunction() {
   

    try {
      await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`)
      console.log('tem imagem') 

      
        
      } catch(error) {
        console.log("não tem imagem")
      }
    
    
  }

  initFunction()

  return (
    <StyledMainContainer>
        <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`} alt="" />
      <Card color={pokemonData.types[0].type.name}>
        <PokemonId>#{formatedId(pokemonData.id)}</PokemonId>
        <PokemonName>{pokemonData.name.charAt(0).toLocaleUpperCase() + pokemonData.name.slice(1)}</PokemonName>
        <Type>
          {pokemonData.types.map((item) => {
            return  <CardType value={item.type.name} icon={item.type.name} />

          })}
        </Type>

        <Features>
          <PokemonWeight>
            <IconTextContainer>
              <img src={WeightIcon} alt="" />
              <p>{pokemonData.weight / 10} kg</p>
            </IconTextContainer>
            <p>Weight</p>
          </PokemonWeight>
          <PokemonHeight>
            <IconTextContainer>
              <img src={HeightIcon} alt="" />
              <p>{pokemonData.height / 10} m</p>
            </IconTextContainer>
            <p>Height</p>
          </PokemonHeight>
        </Features>
      <MoreDetails color={pokemonData.types[0].type.name}>
      <IconTextContainer>
        <img src={BoltIcon} alt=""/>
        <p>More Details</p>
      </IconTextContainer>
      </MoreDetails>
      </Card>
    </StyledMainContainer>
  );
}
