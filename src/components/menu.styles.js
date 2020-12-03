import styled from '@emotion/styled';
import { colors } from '../styles/variables.js';

export const Wrapper = styled.nav`
  background-color: white;
  padding: 16px 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Links = styled.div`
  position: absolute;
  right: 0px;
`;

export const LinksItem = styled.a`
  padding: 16px;
  color: ${colors.darkBlue};
`;

export const LinksMenu = styled.div`
  padding: 25px;
  margin-right: 30px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.darkBlue};
`;

export const Logo = styled.div`
  margin-left: 50px;
  margin-top: 10px;
`
