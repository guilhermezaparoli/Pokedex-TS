import { styled } from "styled-components";

export const STATUS_COLORS = {
bug: "type-bug",
fire: 'type-fire',
flying: 'type-flying',
dark: 'type-dark',
dragon: 'type-dragon',
electric: 'type-electric',
grass: 'type-grass',
poison: 'type-poison',
water: 'type-water',
fairy: 'type-fairy',
fighting: 'type-fighting',
ghost: 'type-ghost',
ice: 'type-ice',
normal: 'type-normal',
psychic: 'type-psychic',
rock: 'type-rock',
ground: 'type-ground',
steel: 'type-steel',
} as const

export interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS,
}

export const StyledContainer = styled.button<StatusProps>`
background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};

display: flex;
align-items: center;
gap: 8px;

padding: 4px 8px;
border-radius: 8px;

p {
  color: ${props => props.theme.white};
  font-size: 1rem;
  line-height: 1.5;

  text-transform: capitalize;
}


`