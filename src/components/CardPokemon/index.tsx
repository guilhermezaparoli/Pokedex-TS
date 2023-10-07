import { CardType } from "../CardType";
import {
  Card,
  Dialog,
  Features,
  IconTextContainer,
  MoreDetails,
  PokemonHeight,
  PokemonId,
  PokemonImage,
  PokemonName,
  PokemonWeight,
  StyledMainContainer,
  StyledPopup,
  Type,
} from "./styles";

import WeightIcon from "../../assets/icon-weight.svg";
import HeightIcon from "../../assets/icon-ruler.svg";
import BoltIcon from "../../assets/icon-bolt.svg";

import { Pokemon } from "../Layout/Body";

import { ModalPokemon } from "../ModalPokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonLoading } from "../SkeletonLoading";

interface CardPokemonProps {
  pokemonData: Pokemon;
  modal?: boolean;
}

export function CardPokemon({ pokemonData, modal = false }: CardPokemonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imagePokemon, setImagePokemon] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  function formatedId(id: number) {
    return String(id).padStart(3, "0");
  }

  async function initFunction() {
    setLoading(true)
    try {
      await axios.get(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`
        );
        setImagePokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`)
      console.log("tem imagem");
    } catch (error) {
      setImagePokemon('')
      console.log("não tem imagem");
    } finally {
      setLoading(false)
    }
  }

useEffect(() => {
initFunction()
}, [pokemonData])

  return (
    <StyledMainContainer>
      {loading ? <SkeletonLoading  src={imagePokemon} key={pokemonData.id} /> : <PokemonImage
        src={imagePokemon}
        alt=""
      /> }
      
      <Card color={pokemonData.types[0].type.name} modal={modal}>
        <PokemonId>#{formatedId(pokemonData.id)}</PokemonId>
        <PokemonName>
          {pokemonData.name.charAt(0).toLocaleUpperCase() +
            pokemonData.name.slice(1)}
        </PokemonName>
        <Type>
          {pokemonData.types.map((item) => {
            return (
              <CardType
                key={item.type.name}
                value={item.type.name}
                isSelected
                style={{ cursor: "initial" }}
              />
            );
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

        {modal || (
          <>
            <MoreDetails
              color={pokemonData.types[0].type.name}
              onClick={() => setIsOpen(true)}
            >
              <IconTextContainer>
                <img src={BoltIcon} alt="" />
                <p>More Details</p>
              </IconTextContainer>
            </MoreDetails>
            <StyledPopup
              open={isOpen}
              onClose={() => setIsOpen(false)}
              modal
              nested
              lockScroll
            >
              <Dialog>
                <ModalPokemon
                  pokemonData={pokemonData}
                  close={() => {
                    setIsOpen(false);
                  }}
                />
              </Dialog>
            </StyledPopup>
          </>
        )}
      </Card>
    </StyledMainContainer>
  );
}
