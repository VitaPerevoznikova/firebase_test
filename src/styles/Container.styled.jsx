import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
