import React from 'react';
import {
  Buttons,
  Container,
  FullWidthContainer,
  SurveyDesc,
  SurveyInstruction,
  Title2,
} from '../styles/Container';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import media from 'css-in-js-media';

const List1 = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListNumber = styled.li`
  display: block;
  list-style: none;
  line-height: 1.6em;
  /* padding: 0;
  width: 33.33333%;
  height: 120px; */
  ${media('>desktop')} {
    font-size: 16px;
    padding: 0;
    width: 33.33333%;
    height: 120px;
  }
  ${media('<=desktop', '>tablet')} {
    font-size: 16px;
    width: 640px;
  }
  ${media('<=tablet', '>phone')} {
    font-size: 16px;
  }
  ${media('<=phone')} {
    font-size: 16px;
  }
`;

const CategoryNumber = styled.div`
  background-color: #003277;
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CategoryName = styled.div`
  font-size: 16px;
`;

const postup = [
  'Samohodnotící dotazník obsahuje 49 otázek. Je rozčleněn na 7 různých oblastí po 7 otázkách.',
  'V každé otázce je výběr ze tří možných odpovědí. Vyberte jenom jednu, která nejvíce charakterizuje úroveň vaší firmy.',
  'Přibližný čas na zpracování celého dotazníku a vygenerování Závěrečné zprávy je cca 45-60 minut.',
  'Dotazník je nutné vyplnit najednou, průběžné výsledky se neukládají. Vyčleňte si prosím na to vhodný čas.',
  'Pro obdržení Závěrečné zprávy je potřeba zodpovědět všechny otázky a v závěru se zaregistrovat.',
  'Závěrečnou zprávu je možné vygenerovat do pdf.',
];

export const Postup = () => {
  return (
    <>
      <FullWidthContainer>
        <Container>
          <Title2 id="beforeYouStart">Než začnete</Title2>
          <SurveyDesc>
            <List1>
              {postup.map((item, i) => (
                <ListNumber>
                  <CategoryNumber>{i + 1}.</CategoryNumber>{' '}
                  <SurveyInstruction>
                    <CategoryName>{item}</CategoryName>
                  </SurveyInstruction>
                </ListNumber>
              ))}
            </List1>
          </SurveyDesc>
          <Buttons>
            <Link to="/dotaznik/MSA">
              <Button primary>Začít</Button>
            </Link>
          </Buttons>
        </Container>
      </FullWidthContainer>
    </>
  );
};
