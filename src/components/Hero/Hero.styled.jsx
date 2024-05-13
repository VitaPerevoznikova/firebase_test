import styled from 'styled-components';

import heroBgImg from '../../assets/hero/hero_bg.jpg';
import heroBgImg2X from '../../assets/hero/hero_bg@2x.jpg';

export const HeroSection  = styled.section`
  padding: 261px 62px 163px 92px;
  margin: 32px;

  border-radius: 30px;
  max-width: 100vw;
  height: 100vh;

  background: url(${heroBgImg}), url(${heroBgImg2X});

  background-repeat: no-repeat;
  background-size: 50%;
  background-position: right top;
  background-color: var(--orange);
`;

export const HeroWrapper  = styled.div`
`;

export const HeroTitle = styled.h1`
max-width: 518px;

font-weight: 500;
font-size: 70px;
line-height: 1.0;
letter-spacing: -0.03em;
color: var(--white); 

margin-bottom: 28px;
`;

export const HeroDescription  = styled.p`
font-weight: 400;
font-size: 28px;
line-height: 107%;
letter-spacing: -0.02em;
color: var(--white);
`;

export const HeroBtn  = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 18px;

border: 1px solid rgba(251, 251, 251, 0.4);
border-radius: 30px;
background-color: transparent;

margin-top: 64px;
padding: 18px 50px;

min-width: 230px;
height: 60px;

font-weight: 500;
font-size: 20px;
line-height: 120%;
letter-spacing: -0.01em;
color: var(--white);
`;