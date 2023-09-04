import { styled } from "styled-components";

const STATUS_COLORS = {
bug: "green-100"
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const StyledContainer = styled.button<StatusProps>`
background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
`