import React, { useState } from 'react';
import { Kontakty } from './kontakty.jsx';
import { Menu } from '../components/menu.jsx';
import { Radar } from 'react-chartjs-2';
import {
  Container,
  FullWidthContainer,
  Title1,
  Title2,
  Text1,
  FinalScore,
  PrintableBodyWrapper,
  ResultSection,
} from '../styles/Container';
import { TableExampleWarningShorthand } from './tableresult';
import './reccomendation.jsx';
import { getRecomendation } from './reccomendation.jsx';
import { Footer } from '../homepage/footer.jsx';
import { Button } from 'semantic-ui-react';
import ReactDOMServer from 'react-dom/server';



const categoryLabels = [
  'Měřící systémy',
  'Lean systémy',
  'Bezpečnost a standardizace',
  'Hodnotové toky',
  'Interakce a komunikace',
  'Plánování a SCM',
  'Flexibilita technologií',
];



const tableFillData = (props) => {
  const [tableResultData, setTableResultData] = useState([]);
  const categoryScore = props.surveyScore.map((category) =>
    category.reduce((agg, curr) => agg + curr, 0),
  );
  let resultScore = [7];
  for (let i = 0; i < categoryLabels.length; i++) {
    resultScore[i] = {
      name: categoryLabels[i],
      status: categoryScore[i].toString(),
      notes: getRecomendation(i, categoryScore[i]),
    };
  }
   return resultScore;
};

export const FinalPage = (props) => {
  const data = {
    labels: categoryLabels,
    datasets: [
      {
        backgroundColor: 'rgba(179,181,198,0.4)',
        borderColor: '#003277',
        borderWidth: 3,
        fontFamily: 'Roboto',
        drawDashedLine: [15, 3, 3, 3],
        pointBorderColor: 'orange',
        data: props.surveyScore.map((category) =>
          category.reduce((agg, curr) => agg + curr, 0),
        ),
      },
    ],
  };
 
  const PrintToPdf = () => {
    window.print();
  };

  const options = {
    responsive: true,
    devicePixelRatio: 2,
       layout: { padding: { left: 50, right: 50, top: 50, bottom: 10 }},
    
    scale: {
      ticks: { suggestedMin: 0, suggestedMax: 21 },
      gridLines: { color: 'grey' },
      pointLabels: { fontSize: 14 },
      angleLines: { color: 'grey' },
    },
  };

  const categoryScore = props.surveyScore.map((category) =>
    category.reduce((agg, curr) => agg + curr, 0),
  );

  const resultScore = categoryScore.reduce((agg, curr) => agg + curr, 0) / 7;
  return (
    <>
    <PrintableBodyWrapper>
      <Menu />
      <FullWidthContainer>
        <Container>
          <Title1>
            Vaše celkové skóre v auditu připravenosti na Industry 4.0 je:{' '}
            <FinalScore>{Math.round(resultScore)} BODŮ</FinalScore>
          </Title1>
          <Text1>
            Výslední skóre je vygenerováno na základě odpovědí, které jste
            zvolili v každém oddílu dotazníku. Níže si můžete prohlédnout graf,
            který ukazuje vaše silné stránky i potenciál na zlepšení. Závěrečnou
            zprávu je možné ihned vytisknout, nebo vygenerovat ve formátu pdf.{' '}
          </Text1>
          <Button secondary onClick={() => PrintToPdf()}>
            Výslední správu vygenerovat do pdf
          </Button>
          <Title2>
            Návod na čtení výsledků dosáhnutých v jednotlivých oblastech
          </Title2>
          <Container>
            <Title1>18-21 bodů</Title1>
            <Text1>
              Top úroveň - vaše firma je velmi dobře připravená na transformaci
              dle principů Industry 4.0. Ale není dobře spokojit se ze současným
              stavem - konkurence nikdy nespí.
            </Text1>
            <Title1>14-17 bodů</Title1>
            <Text1>
              Střední úroveň - vaše firma je na transformaci dle principů
              Industry 4.0 připravena v některých oblastech. Inspirujte se
              doporučeními, snažte se zejména o systematický přístup k celkovému
              zlepšování. Nezapomínejte na motivaci vašich lidí.
            </Text1>
            <Title1>7-13 bodů</Title1>
            <Text1>
              Vaše firma má ještě velký potenciál v systému a procesech, který
              je potřeba využít pro přípravu na Industry 4.0. Doporučujeme co
              nejdříve začít realizovat projekty, které Vám pomůžou nastartovat
              změny směrem k celkové optimalizaci.
            </Text1>
          </Container>
          <div class="pagebreak"> </div>
          <Title2>
            Výsledky vašeho samohodnocení v jednotlivých oblastech:
          </Title2>
          <ResultSection>
          <TableExampleWarningShorthand tableResult={tableFillData(props)} />
          </ResultSection>
        </Container>      
      </FullWidthContainer>
      <div class="pagebreak"> </div>
      <ResultSection>
      <Radar
        data={data}
        type='radar'
        width={300}
        high={400}
        legend={{ display: false }}
        options={options}
      />
      </ResultSection>
      <div class="pagebreak"> </div>
      <Kontakty />
      <Footer />
      </PrintableBodyWrapper>
    </>
  );
};
