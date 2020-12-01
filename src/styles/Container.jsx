import styled from '@emotion/styled';
import { colors } from '../styles/variables.js';
import roboti from '../img/roboti.png';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'Roboto';
  text-align: -webkit-center;
`;

export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor || colors.lightGrey};
  color: ${(props) =>
    props.bgColor === colors.darkBlue ? 'white' : 'inherit'};
  font-family: 'Roboto';
`;

export const Title1 = styled.h1`
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  padding: 25px;
  width: 720px;
  line-height: 1.6em;
  color: ${colors.darkBlue};
`;

export const Title2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding: 25px;
  margin-bottom: 0px;
`;

export const Title2Left = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  padding: 25px;
  margin-left: 30px;
  margin-bottom: 0px;
`;

export const Text1 = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 25px;
  line-height: 1.6em;
  width: 800px;

  padding-bottom: 45px;
`;

export const TextLeft = styled.p`
  font-size: 16px;
  text-align: left;
  padding: 25px;
  line-height: 1.6em;
  width: 450px;
  margin-left: 30px;
`;

export const QuestionTitle1 = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 25px;
`;

export const QuestionTitle2 = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding: 25px;
  margin-top: 25px;
`;

export const QuestionData = styled.div`
  height: 25px;
`;

export const QuestionnaireButton = styled.div`
  display: flex;
  margin: 35px;
`;

export const TextFooter = styled.div`
  font-style: italic;
  color: '#003277';
  text-align: center;
  padding: 25px;
`;

export const Contacts = styled.div`
  display: flex;
  padding: 25px;
`;

export const ContactsText = styled.div`
  display: block;
  padding: 25px;
`;


export const Buttons = styled.div`
  text-align: center;
  margin: 32px;
`;

export const Roboti = styled.div`
  width: 400px;
  height: 250px;
 /*  background-image: url(${roboti}); */
  background-size: contain;  
  background-repeat: no-repeat;

`;

export const RobotiWrapper = styled.div`
  width: 100%;
  text-align: -webkit-center;
  margin-bottom: -160px;
`;

export const ContainerIndustry = styled.div`
 max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
  font-family: 'Roboto';
  text-align: -webkit-center;
`