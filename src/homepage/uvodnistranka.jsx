import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import {
  Container,
  FullWidthContainer,
  Title1,
  Title2,
  Text1,
  Buttons,
  TextLeft,
  Title2Left,
  Roboti,
  RobotiWrapper,
  ContainerIndustry,
  SurveyDesc,
  AboutSurvey,
  AboutSurveyPart1,
} from '../styles/Container';
import { colors } from '../styles/variables';
import DefaultTemplate from '../templates/DefaultTemplate';
import graf from '../img/graf.jpg';
import roboti from '../img/roboti.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Text = styled.div`
  font-size: 15px;
  text-align: center;
  padding: 25px;
`;

export const UvodniStranka = () => {
  return (
    <>
      <DefaultTemplate>
        <Container>
          <Title1>
            Audit připravenosti firmy na implementaci principů Industry 4.0
          </Title1>
          <Text1>
            Náš on-line dotazník vám umožní posoudit připravenost vaší
            společnosti na implementaci principů Industry 4.0. Na základě jeho
            výsledků budete moci definovat svoje silné stránky i konkrétní
            potenciály na zlepšení.
          </Text1>
          <Buttons>
            <Link to="/dotaznik/MSA">
            <Button secondary >
              Začít
            </Button>
            </Link>
          </Buttons>
        </Container>
        <RobotiWrapper>
          <Roboti>
            <img src={roboti} width="55%" alt="roboti" />
          </Roboti>
        </RobotiWrapper>
        <FullWidthContainer>
          <ContainerIndustry>
            <Title2>Průmysl 4.0 - čtvrtá průmyslová revoluce</Title2>
            <Text1>
              je označení pro současný trend digitalizace, s ní související
              automatizaci výroby a změny na trhu práce. Filosofie Industry 4.0
              nabízí možnosti na vytvoření skutečně štíhlé firmy. Umožňuje
              jednodušší a obsáhlejší pochopení požadavků a potřeb zákazníků
              (big data) a okamžité sdílení potřebných informací přes komplexní
              řeťězce dodávek a sítí. Smart firmy produkují víc, s menším
              plýtváním - a stávají se tak
              <strong>víc konkurence schopné i na globálních trzích</strong>.
            </Text1>
          </ContainerIndustry>
        </FullWidthContainer>
        <FullWidthContainer bgColor={colors.darkBlue}>
          <Container>
            <SurveyDesc>
              <Grid divided="vertically">
                <Grid.Row columns={2}>
                  <AboutSurvey>
                    <Grid.Column>
                      <AboutSurveyPart1>
                        <Title2Left>
                          Jednoduchý popis dotazníku a jeho funkčnosti
                        </Title2Left>
                        <TextLeft>
                          Dotazník je rozdělen na 7 průřezových oblastí
                          charakterizujících fungování firmy. Každá oblast
                          obsahuje&nbsp;7 otázek s alternativami odpovědí.
                          <br />
                          <br />
                          Výstupem z hodnocení je Závěrečná zpráva, která
                          graficky znázorní úroveň vaší společnosti v
                          definovaných oblastech.&nbsp;V závěru uvádí tipy na
                          zlepšení.
                        </TextLeft>
                      </AboutSurveyPart1>
                    </Grid.Column>
                    <AboutSurveyPart1>
                      <Grid.Column>
                        <img src={graf} alt="graf" />
                      </Grid.Column>
                    </AboutSurveyPart1>
                  </AboutSurvey>
                </Grid.Row>
              </Grid>
            </SurveyDesc>
          </Container>
        </FullWidthContainer>
      </DefaultTemplate>
    </>
  );
};
