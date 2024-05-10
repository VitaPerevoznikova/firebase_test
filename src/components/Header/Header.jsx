import { HeaderBox, HeaderContainer,LogoLink, NavLink, Navigation } from "./Header.styled";
import {Container} from "../../styles/Container.styled";

export const Header = () => {

  return (
    <HeaderContainer>
      <Container>
        <HeaderBox>
     <LogoLink to="/">Nanny.Services</LogoLink>
      <Navigation>
      <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/nannies">
          Nannies
        </NavLink>
        <NavLink to="/favorites">
          Favorites
        </NavLink>
      </Navigation>
      </HeaderBox>
      </Container>
    </HeaderContainer>
   
  );
};
