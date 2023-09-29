import { styled } from "styled-components";

export const StyledGlobalContainer = styled.main`
display: flex;
justify-content: center;
flex-direction: column;

padding: 24px;

`

export const ContainerFooter = styled.div`
padding-top: 1.5rem;
max-width: 76rem;
width: 100%;
margin: 0 auto;

border-top: 1px solid ${props => props.theme["pokemon-card-border"]};

@media (max-width: 768px) {
  padding-top: 0.5rem;
}
`
export const FooterContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


@media (max-width: 768px) {
  padding: 0 0.5rem;

  flex-direction: column;
  gap: 20px;
}

`

export const Medias = styled.div`
display: flex;
gap: 1.5rem;


> img {
  cursor: pointer;
}
`

export const Copyright = styled.div`

> p {
  color: ${props => props.theme.white};
  font-size: 0.75rem;
  line-height: 1.5;
}
`