import Popup from "reactjs-popup";
import { keyframes, styled } from "styled-components";

export const STATUS_COLORS = {
  bug: "type-bug",
  fire: "type-fire",
  flying: "type-flying",
  dark: "type-dark",
  dragon: "type-dragon",
  electric: "type-electric",
  grass: "type-grass",
  poison: "type-poison",
  water: "type-water",
  fairy: "type-fairy",
  fighting: "type-fighting",
  ghost: "type-ghost",
  ice: "type-ice",
  normal: "type-normal",
  psychic: "type-psychic",
  rock: "type-rock",
  steel: "type-steel",
  ground: "type-ground"
} as const;

export interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}


const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
  `;
interface StyledMainContainerProps {
  modal?: boolean
}

export const StyledMainContainer = styled.div<StyledMainContainerProps>`
  width: 24rem;
  max-height: 23.5rem;
  animation: ${fadeDown} 0.8s;
  position: relative;


@media (max-width: 768px) {
  width: 20rem;
}
`;

export const Card = styled.div<StyledMainContainerProps>`
  border: 1px solid ${({theme, modal}) => modal ? "transparent" : theme["pokemon-card-border"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 24px;
  position: relative;
  

  padding-top: 7rem;

  ${props => !props.modal && `&::after {
    content: "";
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${props.theme[STATUS_COLORS[props.color]]};
    filter: blur(128px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.8s;
    z-index: -2;
  }`}

`;
export const PokemonImage = styled.img`
  max-width: 16rem;
  max-height: 16rem;

  position: absolute;
  top: -10.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;


`;
export const PokemonId = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;

  margin: 24px 0 4px 0;
`;

export const PokemonName = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.35;

  margin-bottom: 12px;
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  margin: 24px 0 32px 0;
`;

export const PokemonWeight = styled.div`
  > p {
    font-size: 1rem;

    line-height: 1.5;
    color: ${(props) => props.theme.white};

    display: flex;
    justify-content: center;
  }
`;

export const PokemonHeight = styled.div`
  > p {
    font-size: 1rem;
    line-height: 1.5;
    color: ${(props) => props.theme.white};

    display: flex;
    justify-content: center;
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  > p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${(props) => props.theme.white};
  }
`;

export const MoreDetails = styled.button`
  width: 100%;
  border-radius: 0 0 24px 24px;
  padding: 12px 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme[STATUS_COLORS[props.color]]};

  > p {
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
  }

  transition: 0.3s;

  &:hover {
    filter: brightness(0.7);
  }
`;
export const Dialog = styled.div`
width: 100%;
margin: 14rem 0 7rem;

/* overflow: auto; */
`

export const StyledPopup = styled(Popup)`



&-overlay {
background: rgba(0, 0, 0, 0.50);

}

@media (max-width: 768px) {
  &-overlay  {
    overflow: auto;
  } 

}
`
