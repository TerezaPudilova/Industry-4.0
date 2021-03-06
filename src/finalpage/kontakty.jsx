import React from 'react';
import { colors } from '../styles/variables.js';
import {
  Container,
  Contacts,
  ContactsText,
  FullWidthContainer,
  Title1,
  Title2,
  Text1,
  FinalScore,
  Title2Link,
  PrintableBodyWrapper,
} from '../styles/Container';
import Horvath from '../img/horvath.png';
import Marek from '../img/marek.jpg';

export const Kontakty = () => {
  return (
    <PrintableBodyWrapper>
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
              <Title2><Title2Link href="mailto:karol.horvath@fbe.sk">karol.horvath@fbe.sk</Title2Link></Title2>
            </ContactsText>
            <img className="noprint" src={Horvath} alt="horvath" />

            <ContactsText>
              <Title2>Tomáš Marek</Title2>
              <p>
                Je specialistou na oblast zvyšování kvality a efektivnosti
                podnikových procesů, projektové a procesní řízení, Lean
                Management. Víc jak 20 let vede a konzultuje ve firmách projekty
                zavádění nových technologií se zaměřením na snižování plýtvání,
                dle principů Toyota Management System.{' '}
              </p>
              <Title2><Title2Link href="mailto:tomas.marek@fbe.cz">tomas.marek@fbe.cz</Title2Link></Title2>
            </ContactsText>
            <img className="noprint" src={Marek} alt="marek" />
          </Contacts>
        </Container>
      </FullWidthContainer>
    </PrintableBodyWrapper>
  );
};
