import styled from '@emotion/styled';
import {colors} from '../styles/variables.js';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  font-family:'Roboto';
`;
export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor || colors.lightGrey};
  color: ${(props) =>
    props.bgColor === colors.darkBlue ? 'white' : 'inherit'};
     font-family:'Roboto'; 
`;

export const Title1 = styled.div`
  font-size: 25px;
  font-weight:bold;
  text-transform: uppercase;
  text-align: center;
padding: 25px;
`;


export const Title2 = styled.div`
  font-size: 20px;
  font-weight:bold;
  text-align: center;
padding: 25px;
`;

export const Text1 = styled.div`
  font-size: 15px;
  text-align: center;
  padding: 25px;
`;

export const QuestionTitle1 = styled.div`
  font-size: 20px;
  font-weight:bold;
  text-transform: uppercase;
  padding: 25px;
`;


export const QuestionTitle2 = styled.div`
  font-size: 15px;
  font-weight:bold;
padding: 25px;
`;