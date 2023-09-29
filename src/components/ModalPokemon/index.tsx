import { CardPokemon } from "../CardPokemon";
import { Pokemon } from "../Layout/Body";
import {
  Atribute,
  AtributeValue,
  ContainerAtributes,
  ContainerDivider,
  ContainerModalPokemon,
  ContainerPokemonStatus,
  Divider,
  GreenBar,
  StatusBar,
  TextStatus,
} from "./styles";
import { ReactComponent as DividerPokeballIcon } from "../../assets/divider-pokeball.svg";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

interface ModalPokemonProps {
  pokemonData: Pokemon;
  close: () => void;
}

export function ModalPokemon({ pokemonData, close }: ModalPokemonProps) {
  return (
    <>
      <ContainerModalPokemon>
        <CloseIcon onClick={() => {
          close();
          console.log("aqui")
        }}/>
        <CardPokemon pokemonData={pokemonData} modal />
        <ContainerDivider>
          <Divider />
          <DividerPokeballIcon />
          <Divider />
        </ContainerDivider>
        <ContainerPokemonStatus>
          <TextStatus>Status</TextStatus>

          {pokemonData.stats.map((status) => {
            return (
              <ContainerAtributes>
                <Atribute>{status.stat.name}</Atribute>
                <AtributeValue>{status.base_stat}</AtributeValue>
                <StatusBar>
                  <GreenBar status={status.base_stat} />
                </StatusBar>
              </ContainerAtributes>
            );
          })}
        </ContainerPokemonStatus>
      </ContainerModalPokemon>
    </>
  );
}
