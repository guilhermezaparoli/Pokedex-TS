import { StyledContainer } from "./styles"

interface CardTypeProps {
  value: string,
  icon: string
}

export function CardType({value, icon}: CardTypeProps) {
  return (
<StyledContainer statusColor={value}>
  <img src={icon} alt="" />
  <p>{value}</p>
</StyledContainer>
  )
}