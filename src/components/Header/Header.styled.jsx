import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--orange);
`;

export const HeaderBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center
`;  

export const LogoLink = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--white);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const NavLink = styled(Link)`
  padding-top: 30px;
  padding-bottom: 30px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: var(--white);
  }
`;
