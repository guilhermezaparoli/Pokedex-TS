import { STATUS_COLORS, StyledContainer } from "./styles"

interface CardTypeProps {
  value: keyof typeof STATUS_COLORS,
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