import React from 'react';
import { render } from 'react-dom';
import { Kontakty } from './kontakty.jsx';
import { Menu } from '../components/menu.jsx';
import { Radar } from 'react-chartjs-2';
import { Container, FullWidthContainer, Title1, Title2, Text1 } from '../styles/Container';


export const FinalPage = (props) => {
  const data = {
    labels: [
      'Bezpečnost a standardizace',
      'Měřící systémy',
      'Lean systémy',
      'Hodnotové toky',
      'Interakce a komunikace',
      'Flexibilita technologií',
      'Plánování a SCM',
    ],
    datasets: [
      {
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: props.surveyScore.map(
          (category) =>
            category.reduce(
              (agg, curr) => (agg + curr === 0 ? 0 : 4 - curr),
              0,
            ) / 7,
        ),
      },
    ],
  };

  return (
    <>
      <Menu />
      <FullWidthContainer>
          <Container>
            <Title1>
        <h1>Vaše celkové skóre v auditu připravenosti na Industry 4.0 je</h1>
        </Title1>
        <p>
          Výslední skóre je vygenerováno na základě odpovědí, které jste zvolili
          v každém oddílu dotazníku. Níže si můžete prohlédnout graf, který
          ukazuje vaše silné stránky i potenciál na zlepšení. Závěrečnou zprávu
          je možné ihned vytisknout, nebo vygenerovat ve formátu pdf a zaslat na
          vaší emailovou adresu zadanou při registraci.{' '}
        </p>
    
      <Title2>
        <h1>Návod na čtení výsledků dosáhnutých v jednotlivých oblastech</h1>
        </Title2>

      <Text1>
        <h1>21-18 bodů</h1>
        <p>
          Top úroveň - vaše firma je velmi dobře připravená na transformaci dle
          principů Industry 4.0. Ale není dobře spokojit se ze současným stavem
          - konkurence nikdy nespí.
        </p>
        <h1>17-14 bodů</h1>
        <p>
          Střední úroveň - vaše firma je na transformaci dle principů Industry
          4.0 připravena v některých oblastech. Inspirujte se doporučeními,
          snažte se zejména o systematický přístup k celkovému zlepšování.
          Nezapomínejte na motivaci vašich lidí.
        </p>
        <h1>13-7 bodů</h1>
        <p>
          {' '}
          Vaše firma má ještě velký potenciál v systému a procesech, který je
          potřeba využít pro přípravu na Industry 4.0. Doporučujeme co nejdříve
          začít realizovat projekty, které Vám pomůžou nastartovat změny směrem
          k celkové optimalizaci.
        </p>
        </Text1>
        </Container>
        </FullWidthContainer>
      <Radar data={data} width={300} height={300} legend={{ display: false }} />
      <Kontakty />
    </>
  );
};
