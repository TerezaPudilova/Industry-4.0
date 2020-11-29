import React from 'react';
import { Container, FullWidthContainer, Title2 } from '../styles/Container';
import {colors} from '../styles/variables.js';
import styled from '@emotion/styled';

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
 background-color:#003277;
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

const postup=[
  'Na začátku vás čeká jednoduchá registrace',
  'Samohodnocení vám zabere cca 30-60 minut',
  'Budete vyplňovat 7 oddílů po 7 otázkách',
  'Pro obdržení Závěrečné zprávy je nutné odpověděť na všechny otázky',
  'K již zodpovězeným otázkám je možné se vrátit a případně upravit hodnocení',
  'Dotazník je nutné vyplnit najednou, průběžné výsledky se neukládají'
];


export const Postup = () => {
  return (
    <>
      <FullWidthContainer>
        <Container>
          <Title2>Než začnete</Title2>
          <List1>
          {postup.map((item, i) => (
            <ListNumber>
              <CategoryNumber>{i + 1}.</CategoryNumber>{' '}
              <CategoryName>{item}</CategoryName>
            </ListNumber>
          ))}
        </List1>
         

        </Container>
      </FullWidthContainer>
    </>
  );
};
