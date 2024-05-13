import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;

  box-shadow: 0 4px 4px 0 rgba(251, 251, 251, 0.4);
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--white);

  margin-right: auto;
  margin-left: 96px;
`;

export const NavBox = styled.div`
  display: flex;
  gap: 90px;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;

  padding-top: 34px;
  padding-bottom: 34px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: var(--white);
  
  &.active::after {
    position: absolute;
    bottom: 16px;
    left: calc(100% / 2 - 4px);
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
  }
`;
