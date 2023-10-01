import styled, { keyframes } from "styled-components";

export const ContainerModalPokemon = styled.div`
  background: rgba(6, 11, 40, 0.15);
  backdrop-filter: blur(20px);

  padding: 1.5rem 2.5rem;

  border-radius: 24px;

  border: 1px solid ${props => props.theme["place-holder-color"]};
  display: flex;
  align-items: center;

  position: relative;

  > svg {
    fill: ${props => props.theme.white};
    height: 35px;
    position: absolute;
    margin: 8px;
    top: 0;
    right: 0;
    transition: transform 0.3s;
    cursor: pointer;

    z-index: 999;

    &:hover {
      transform: scale(1.1);
    }
  }


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    max-width: 343px;
  }
`;

export const ContainerDivider = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 24px;

  margin: 0 40px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 124px;
  background-color: ${(props) => props.theme["place-holder-color"]};

  @media (max-width: 768px) {
    height: 1px;
    width:119px;

  }
`;

export const ContainerPokemonStatus = styled.div``;

export const TextStatus = styled.h1`
  color: ${(props) => props.theme.white};

  font-size: 2rem;
  font-weight: 400;
  line-height: 1.25;

  margin-bottom: 1rem;
`;

export const Atribute = styled.p`
  width: 4.375rem;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  line-height: 1;
`;
export const AtributeValue = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-weight: 700;

  width: 30px;
`;

export const ContainerAtributes = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 1rem;
  }
`;
export const StatusBar = styled.div`
width: 304px;
height: 8px;
border-radius: 4px;
overflow: hidden;

background-color: ${props => props.theme["container-modal"]};



@media (max-width: 768px) {
  width: 169px;
}
`;

const progressBar = keyframes`
to {
  transform: initial;
}
`

interface GreenBarProps {
  status: number;
}

export const GreenBar = styled.div<GreenBarProps>`
height: 8px;
max-width: 100%;
border-radius: 4px;

background-color: ${({theme, status}) => status >= 50 ? theme["type-grass"] : theme["type-fighting"]};

box-shadow: 0px 0px 12px 4px rgba(28, 216, 14, 0.25);

transform: translate3d(-100%, 0, 0);
animation: ${progressBar} 2s forwards;

width: ${props => props.status }%;
`
