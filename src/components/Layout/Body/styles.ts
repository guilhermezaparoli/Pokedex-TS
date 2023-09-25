import { styled } from "styled-components";

export const StyledContainerBody = styled.main`

`

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

@media (max-width: 768px) {
  max-width: 100%;
padding: 1rem 2rem;
}

`

export const Types = styled.div`
max-width: 60rem;
display: flex;
flex-wrap: wrap;
justify-content: center;

gap: 18px;
align-items: center;


@media (max-width: 768px) {
flex-wrap: nowrap;
overflow: auto;
justify-content: initial;
}
`

export const InputSearchContainer = styled.div`
max-width: 350px;

width: 100%;
position: relative;

form {
  display: flex;

}


&:focus-within {
  button {
  background-color: ${props => props.theme["input-color"]};
  }
}

  
@media (max-width: 768px) {
max-width: 300px;
width: 100%;
}
`
export const InputSearch =styled.input`

width: 100%;
height: 56px;
padding: 1rem;
border-radius: 8px;
border: 2px solid ${props => props.theme["type-ghost"]};
background-color: transparent;
color: ${props => props.theme.white};
font-size: 1rem;
outline: none;

&::placeholder {
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme["place-holder-color"]};
}

transition: border 0.3s;

&:focus {
  border: 2px solid ${props => props.theme["input-color"]};
}

`

export const ButtonSearch = styled.button`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: 0;

width: 56px;
height: 56px;
border-radius: 0px 8px 8px 0px;
background-color: ${props => props.theme["type-ghost"]};

transition: background-color 0.3s;

`
export const ContainerDivider =styled.div`
max-width: 76rem;
margin: 4.5rem auto 12rem ;

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

export const ContainerCards = styled.div`
max-width: 76rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
gap: 13.5rem 3rem;
justify-items: center;



margin: 0 auto;
`