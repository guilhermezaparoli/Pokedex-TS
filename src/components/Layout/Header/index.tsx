import { ContainerHeader, ContainerHero, HeaderContent, Heroes, ImgBigHero, ImgHero, ImgSmallHero, Medias, StyledGlobalContainer, Waves } from "./styles";
import PokemonLogo from "../../../assets/logo-pokemon.svg";
import LogoLinkedin from "../../../assets/logo-linkedin.svg"
import LogoGithub from "../../../assets/logo-github.svg"
import ImgCharizar from "../../../assets/img-charizard-min.png"
import ImgPokemonTrainer from "../../../assets/img- pokémon_Trainer.png"
import ImgIvysaur from "../../../assets/img-ivysaur.png"



export function Header() {
  return(
    <StyledGlobalContainer>
<ContainerHeader>
  <HeaderContent>

<img src={PokemonLogo} alt="logo escrito Pokémon" />

<Medias>

<img src={LogoLinkedin} alt="logo Linkedin" />
<img src={LogoGithub} alt="logo Github" /> 
</Medias>

  </HeaderContent>

</ContainerHeader>


<ContainerHero>

  <Heroes>

  
<ImgSmallHero src={ImgIvysaur} alt="imagem do pokémon charizard" />

<ImgHero style={{transform: "none"}} src={ImgPokemonTrainer} alt="imagem do pokémon charizard" />
<ImgBigHero src={ImgCharizar} alt="imagem do pokémon charizard" />
</Heroes>


<Waves>
<svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className='parallax'>
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(6, 11, 40, 0.7)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(6, 11, 40, 0.5)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(6, 11, 40, 0.3)"
        />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#060B28" />
      </g>
    </svg>
   </Waves>
</ContainerHero>
    </StyledGlobalContainer>
  )
}