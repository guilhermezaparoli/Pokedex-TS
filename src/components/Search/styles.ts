import { styled } from "styled-components";

export const SearchContainer = styled.div`
max-width: 76rem;
margin: 4rem auto 0;


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const TypeSearch = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;



> p {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.35;
}
`

export const Types = styled.div`
max-width: 60rem;
overflow: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;

gap: 18px;
align-items: center;
`

export const InputSearchContainer = styled.div`
form {
  display: flex;

}
  

`
export const InputSearch =styled.input`

max-width: 432px;
width: 100%;
height: 56px;


padding: 1rem;
border-radius: 8px 0px 0px 8px;

border: 2px solid ${props => props.theme["input-color"]};
background-color: transparent;
color: ${props => props.theme.white};
font-size: 1rem;
outline: none;

&::placeholder {
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme["place-holder-color"]};
}
`

export const ButtonSearch = styled.button`
display: flex;
align-items: center;
justify-content: center;

width: 56px;
height: 56px;
border-radius: 0px 8px 8px 0px;
background-color: ${props => props.theme["input-color"]};

svg {
  fill: red;
}
`
export const ContainerDivider =styled.div`
max-width: 76rem;
margin: 2.5rem auto 10rem ;

display: flex;
align-items: center;
justify-content: center;

svg {
  height: 56px;
  width: 56px;

  margin: 0 1.5rem;
}
`

const BaseDivider = styled.div`
height: 1px;
width: 100%;
`
export const DividerRight = styled(BaseDivider)`

background: linear-gradient(200deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);;
`

export const DividerLeft = styled(BaseDivider)`
background: linear-gradient(200deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);;
`

export const StyledPokeballIcon = styled.img `

width: 36px;
height: 36px;
margin: 0px 1.5rem;

`