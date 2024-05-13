import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
display: flex;
gap: 8px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
 
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: var(--white);

  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 14px 39px;
  min-width: 124px;
  height: 48px;

  transition: background-color var(--time-cubic);

  &:hover {
   background-color: var(--orange);
  }
`;
