import { styled } from "styled-components";

export const SearchContainer = styled.div`
max-width: 76rem;
margin: 4rem auto 0;


display: flex;

align-items: end;
justify-content: space-between;

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

overflow: auto;
display: flex;
gap: 8px;
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
`
