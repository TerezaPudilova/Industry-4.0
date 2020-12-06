import styled from '@emotion/styled';
import { colors } from '../styles/variables.js';
import media from 'css-in-js-media';
import roboti from '../img/roboti.png';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'Roboto';
  text-align: -webkit-center;
  justify-content: center;
`;

export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor || colors.lightGrey};
  color: ${(props) =>
    props.bgColor === colors.darkBlue ? 'white' : 'inherit'};
  font-family: 'Roboto';
`;

export const Title1 = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  padding: 25px;
  line-height: 1.6em;
  color: ${(props) =>
    props.bgColor === colors.darkBlue ? 'white' : 'inherit'};
  margin: auto;
  ${media('>desktop')} {
    font-size: 25px;
    width: 640px;
  }
  ${media('<=desktop', '>tablet')} {
    font-size: 25px;
  }
  ${media('<=tablet', '>phone')} {
    font-size: 25px;
  }
  ${media('<=phone')} {
    font-size: 25px;
  }
`;

export const Title2 = styled.h2`
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  padding: 25px;
  margin-bottom: 0px;
`;

export const Text1 = styled.p`
  text-align: center;
  padding: 15px;
  margin: auto;
  ${media('>desktop')} {
    font-size: 16px;
    width: 720px;
  }
  ${media('<=desktop', '>tablet')} {
    font-size: 16px;
  }
  ${media('<=tablet', '>phone')} {
    font-size: 16px;
  }
  ${media('<=phone')} {
    font-size: 16px;
  }
`;

export const Title2Left = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  padding: 25px;
  /* padding-left: 20px; */
  margin-bottom: 0px;
  /* margin-left: 42px; */
`;

export const TextLeft = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 25px;
  line-height: 1.6em;
  width: 450px;
  margin: 0px;
`;

export const AboutSurvey = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
`;

export const AboutSurveyPart1 = styled.div`
  width: 600px;
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
  text-align: justify;
  max-width: 640px;
`;

export const QuestionData = styled.div`
  display: flex;
  height: 25px;
  text-align: justify;
  align-items: center;
  background-color: #f5f3f3;
  height: 50px;
  padding: 0 0 0 10px;
  border-radius: 10px;
  max-width: 640px;
`;

export const QuestionnaireButton = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 30px;
  text-align: center;
`;

export const TextFooter = styled.div`
  font-style: italic;
  color: black;
  text-align: center;
  padding: 25px;
  font-family: 'Roboto';
`;

export const Contacts = styled.div`
  padding: 25px;
  margin: 25px;
  ${media('>desktop')} {
    padding: 0;
    max-width: 1280px;
    display: flex;
    padding: 25px;
    margin: 25px;
  }
  ${media('<=desktop', '>tablet')} {
    text-align: -webkit-center;
  }
  ${media('<=tablet', '>phone')} {
    text-align: -webkit-center;
  }
  ${media('<=phone')} {
    text-align: -webkit-center;
  }
`;

export const ContactsText = styled.div`
  display: block;
  text-align: justify;
  padding: 25px;
`;

export const Buttons = styled.div`
  text-align: center;
  margin: 16px;
  padding-bottom: 32px;
`;

export const Roboti = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
`;

export const RobotiWrapper = styled.div`
  width: 100%;
  text-align: -webkit-center;
  margin-bottom: -220px;
  padding-bottom: 100px;
`;

export const ContainerIndustry = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 30px;
  font-family: 'Roboto';
  text-align: -webkit-center;
`;

export const RegistryForm = styled.div`
  max-width: 640px;
  margin: auto;
  text-align: center;
  padding-bottom: 48px;
`;

export const FooterPart = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 32px;
`;

export const FooterItem = styled.div`
  display: block;
  width: 33%;
  text-align: center;
`;

export const FooterMiddleItem = styled.div`
  display: block;
  width: 33%;
  text-align: center;
  border-right-style: solid;
  border-left-style: solid;
  border-width: 1px;
  border-color: ${colors.darkBlue};
`;

export const SurveyDesc = styled.div`

`;

export const SurveyInstruction = styled.div`
  padding-left: 32px;
  padding-right: 32px;
`;

export const FinalScore = styled.div`
  font-weight: 400;
  font-size: 36px;
  padding-top: 24px;
`;

export const PrintableBodyWrapper = styled.div`
  @page {
    size: landscape;
    margin: 0cm;
  }
  @media print {
    position: relative;
    top: 0;
    bottom: 0;
    left: 10;
    right: 10;
    background-color: white;
    display: block;
    align-items: center;
    .pagebreak {
      page-break-after: always;
    }
    .noprint {
      visibility: hidden;
    }
  }
`;
