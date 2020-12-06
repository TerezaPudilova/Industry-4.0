import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles/variables.js';
import {
  Container,
  FullWidthContainer,
  Contacts,
  Title1,
  Title2,
  ContactsText,
} from '../styles/Container';
import Horvath from '../img/horvath.png';
import Marek from '../img/marek.jpg';

export const Kontakty = () => {
  return (
    <FullWidthContainer bgColor={colors.darkBlue}>
      <Container>
        <Title1>
          Pro doplnění informací a případnou konzultaci kontaktujte naše
          specialisty
        </Title1>

        <Contacts>
          <ContactsText>
            <Title2>Karol Horváth</Title2>
            <p>
              {' '}
              Pracovní zkušenosti sbíral v automobilkách Bentley Motors (Velká
              Británie), Volkswagen Autoeuropa (Portugalsko), Volkswagen
              Slovakia a pod. Je specialistou na inteligentní technologie a
              koncepty Industry 4.0, blockchain, využití neuronových sítí a
              aplikaci SMART řešení v provozu.
            </p>
            <Title2>Email:karol.horvath@fbe.sk</Title2>
          </ContactsText>
          <img src={Horvath} alt="horvath" />

          <ContactsText>
            <Title2>Tomáš Marek</Title2>
            <p>
              Je specialistou na oblast zvyšování kvality a efektivnosti
              podnikových procesů, projektové a procesní řízení, Lean
              Management. Víc jak 20 let vede a konzultuje ve firmách projekty
              zavádění nových technologií se zaměřením na snižování plýtvání,
              dle principů Toyota Management System.{' '}
            </p>
            <Title2>Email:tomas.marek@fbe.cz</Title2>
          </ContactsText>
          <img src={Marek} alt="marek" />
        </Contacts>
      </Container>
    </FullWidthContainer>
  );
};
