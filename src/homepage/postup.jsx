import React from 'react';
import {
  Buttons,
  Container,
  FullWidthContainer,

  Title2,
} from '../styles/Container';
import { colors } from '../styles/variables.js';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const List1 = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
`;

const ListNumber = styled.li`
  list-style: none;
  padding: 0;
  width: 33.33333%;
  height: 100px;
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
  margin-top: 10px;
`;

const postup = [
  'Samohodnotící dotazník obsahuje 49 otázek. Je rozčleněn na 7 různých oblastí po 7 otázkách.',
  'V každé otázce je výběr ze tří možných odpovědí. Vyberte jenom jednu, která nejvíce charakterizuje úroveň vaší firmy.',
  'Přibližný čas na zpracování celého dotazníku a vygenerování Závěrečné zprávy je cca 45-60 minut.',
  'Dotazník je nutné vyplnit najednou, průběžné výsledky se neukládají. Vyčleňte si prosím na to vhodný čas.',
  'Pro obdržení Závěrečné zprávy je potřeba zodpovědět všechny otázky a v závěru se zaregistrovat.',
  'Závěrečnou zprávu je možné zaslat e-mailem na vámi uvedenou adresu ve formě pdf, případně ihned vytisknout.',
];

export const Postup = () => {
  return (
    <>
      <FullWidthContainer>
        <Container>
          <Title2 id="beforeYouStart">Než začnete</Title2>
          
            <List1>
              {postup.map((item, i) => (
                <ListNumber>
                  <CategoryNumber>{i + 1}.</CategoryNumber>{' '}
                  <CategoryName>{item}</CategoryName>
                </ListNumber>
              ))}
            </List1>
          
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
