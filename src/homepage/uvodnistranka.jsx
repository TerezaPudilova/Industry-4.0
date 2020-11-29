import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Container, FullWidthContainer, Title1, Title2, Text1 } from '../styles/Container';
import { colors } from '../styles/variables';
import DefaultTemplate from '../templates/DefaultTemplate';
import graf from '../img/graf.jpg';
import styled from '@emotion/styled';


const Text = styled.div`
  font-size: 15px;
  text-align: center;
  padding: 25px;
`;

export const UvodniStranka = () => {
  return (
    <>
      <DefaultTemplate>
        <Title1>
          Audit připravenosti firmy na implementaci principů Industry 4.0
        </Title1>
        <Text>
              Náš on-line dotazník vám umožní posoudit připravenost vaší
              společnosti na implementaci principů Industry 4.0. <br />
              Na základě jeho výsledků budete moci definovat svoje silné stránky
              i konkrétní potenciály na zlepšení.
              </Text>
           
        <FullWidthContainer>
          <Container>
            

          </Container>
        </FullWidthContainer>
        <FullWidthContainer>
          <Container>
          <Title2>
          Průmysl 4.0 (čtvrtá průmyslová revoluce)
          </Title2>
          <Text1>
          je označení pro současný trend digitalizace, s ní související
            automatizaci výroby a změny na trhu práce. Filosofie Industry 4.0
            nabízí možnosti na vytvoření skutečně štíhlé firmy. Umožňuje
            jednodušší a obsáhlejší pochopení požadavků a potřeb zákazníků (big
            data) a okamžité sdílení potřebných informací přes komplexní řeťězce
            dodávek a sítí. Smart firmy produkují víc, s menším plýtváním - a
            stávají se tak  <strong>víc konkurence schopné i na globálních trzích</strong>.
            </Text1>
          </Container>
        </FullWidthContainer>
        <FullWidthContainer bgColor={colors.darkBlue}>
          <Container>
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                <Title2>
          Jednoduchý popis dotazníku a jeho funkčnosti
          </Title2>
                  <p>
                    Dotazník je rozdělen na 7 průřezových oblastí
                    charakterizujících fungování firmy. Každá oblast obsahuje 7
                    otázek s alternativami odpovědí.
                  </p>
                  <p>
                    Výstupem z hodnocení je Závěrečná zpráva, která graficky
                    znázorní úroveň vaší společnosti v definovaných oblastech. V
                    závěru uvádí tipy na zlepšení.
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <div className="graf">
                    <img src={graf} alt="graf" />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </FullWidthContainer>
      </DefaultTemplate>
    </>
  );
};
