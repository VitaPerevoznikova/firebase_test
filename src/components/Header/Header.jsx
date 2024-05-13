import { HeaderBox, HeaderContainer,LogoLink, NavBox, Navigation, StyledLink } from "./Header.styled";
import {Container} from "../../styles/Container.styled";
import AuthNav from "../AuthNav/AuthNav";

export const Header = () => {

  return (
    <HeaderContainer>
      <Container>
        <HeaderBox>
     <LogoLink to="/" >
      Nanny.Services
      </LogoLink>

     <NavBox>
      <Navigation>

      <StyledLink to="/home">
          Home
        </StyledLink>

        <StyledLink to="/nannies">
          Nannies
        </StyledLink>

        {/* <StyledLink to="/favorites">
          Favorites
        </StyledLink> */}
      </Navigation>

      <AuthNav/>
      
      </NavBox>
      </HeaderBox>
      </Container>
    </HeaderContainer>
   
  );
};
