import { HeroBtn, HeroDescription, HeroSection, HeroTitle, HeroWrapper } from "./Hero.styled";
import {Container} from "../../styles/Container.styled";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
    return (
      <HeroSection>
        <Container>
           <HeroWrapper>
           <HeroTitle>Make Life Easier for the Family:</HeroTitle>  
           <HeroDescription>Find Babysitters Online for All Occasions</HeroDescription>
           <HeroBtn>
            Get started
           <MdArrowOutward/>
           </HeroBtn>
           </HeroWrapper>
        </Container> 
        
      </HeroSection>
    );
  };
  export default Hero;