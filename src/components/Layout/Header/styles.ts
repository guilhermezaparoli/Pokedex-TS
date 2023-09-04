import { styled } from "styled-components";

import BackgroundPokeball from "../../../assets/background-pokeball.svg"

export const StyledGlobalContainer = styled.main`

overflow: hidden;

background: linear-gradient(180deg, #EE8328 0%, #E14318 100%);

display: flex;
justify-content: center;
flex-direction: column;

`

export const ContainerHeader = styled.div`
padding-top: 1.5rem;
max-width: 76rem;
width: 100%;
margin: 0 auto;

`
export const HeaderContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

export const Medias = styled.div`
display: flex;
gap: 1.5rem;
`

export const ContainerHero = styled.div`
position: relative;

margin-top: 4.5rem;
&::before, &&::after {
  content: "";
 
  background:url(${BackgroundPokeball}) no-repeat;
  width: 25rem;
  height: 25rem;
  background-size: cover;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

&::before {
    left: -12.5rem;
  }


&::after {
    right: -12.5rem;
  }

  @media (max-width: 31.25rem) {
    &::before,
    &::after {
      display: none;
    }
  }

`

export const Heroes = styled.div`
display: flex;
justify-content: center;
`

export const ImgBigHero = styled.img`
max-width: 488px;
max-height: 528px;
transition: 0.3s;
z-index: 2;


&:hover {
  transform: scale(1.1);

  
}




animation: diagonalAnimation 2s;

@keyframes diagonalAnimation {
  
	0% {
		transform: translate(1000px, -750px );
	}

	100% {
		transform: translate(0,0);
	}
  
}

`

export const ImgHero = styled.img`
max-height: 300px;
max-width: 100%;


transition: 0.3s;
z-index: 2;
`

export const ImgSmallHero = styled.img`

max-height: 300px;
max-width: 100%;


transition: 0.3s;
z-index: 2;
&:hover {
  transform: scale(1.1);
}

animation: scaleAnimation 2s;


@keyframes scaleAnimation {
  

  from {
    transform: translate(-750px, 50px);
  }

  to {
    transform: translate(0);
  }
  
}

`

export const Waves =styled.div`


margin-bottom: 8rem;

.waves {
  width: 100%;
  height: 7.5rem;
  margin-bottom: -0.44rem; /*Fix for safari gap*/
  min-height: 7.5rem;
  max-height: 7.5rem;
  position: absolute;
  bottom: 0;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 500px) {
  .waves {
    height: 2.5rem;
    min-height: 2.5rem;
  }
}
`