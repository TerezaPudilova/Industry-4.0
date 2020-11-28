import styled from '@emotion/styled';
import { colors } from './variables';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor || colors.lightGrey};
  color: ${(props) =>
    props.bgColor === colors.darkBlue ? 'white' : 'inherit'};
`;
