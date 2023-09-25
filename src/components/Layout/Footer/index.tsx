import {
  ContainerFooter,
  Copyright,
  FooterContent,
  Medias,
  StyledGlobalContainer,
} from "./styles";
import LogoLinkedin from "../../../assets/logo-linkedin.svg";
import LogoGithub from "../../../assets/logo-github.svg";


export function Footer() {
  return (
    <StyledGlobalContainer>
      <ContainerFooter>
        <FooterContent>
          <Copyright>
            <p>Image rights to Nintendo & The Pokémon Company</p>
            <p>Data provided by API - pokeapi.co</p>
          </Copyright>
          <Medias>
            <a href="https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/">
              <img src={LogoLinkedin} alt="logo Linkedin" />
            </a>

            <a href="https://github.com/guilhermezaparoli">
              <img src={LogoGithub} alt="logo Github" />
            </a>
          </Medias>
        </FooterContent>
      </ContainerFooter>

    </StyledGlobalContainer>
  );
}
