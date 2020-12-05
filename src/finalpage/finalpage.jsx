import React, { useState } from 'react';
import { render } from 'react-dom';
import { Kontakty } from './kontakty.jsx';
import { Menu } from '../components/menu.jsx';
import { Radar } from 'react-chartjs-2';
import {
  Container,
  FullWidthContainer,
  Title1,
  Title2,
  Text1,
} from '../styles/Container';
import { TableExampleWarningShorthand } from './tableresult';
import './reccomendation.jsx';
import { getRecomendation } from './reccomendation.jsx';
import {Footer} from '../homepage/footer.jsx';
import { Button } from 'semantic-ui-react';
//import styled from '@emotion/styled';
//import { jsPDF } from "jspdf";
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
    category.reduce((agg, curr) => agg + curr, 0));
  let resultScore = [7];
  for (let i = 0; i < categoryLabels.length; i++) {
    resultScore[i] = {
      name: categoryLabels[i],
      status: categoryScore[i].toString(),
      notes: getRecomendation(i, categoryScore[i]),
    };
  }
//  setTableResultData(result => [...result, resultScore]);
  console.log(resultScore);
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
       drawDashedLine: ([15, 3, 3, 3]),
            pointBorderColor: 'orange',
                data: props.surveyScore.map((category) =>
          category.reduce((agg, curr) => agg + curr, 0),
        ),
      },
    ],
  };

  const PrintToPdf=()=> {
    var doc=new jsPDF();
  doc.fromHTML(ReactDOMServer.renderToStaticMarkup(<FinalPage/>));
  doc.save("myDocument.pdf");
  }
  
  const options = {
    scale: {
      ticks: {suggestedMin:0,suggestedMax: 21 },
      gridLines: {color:'grey'},
      pointLabels: {fontSize: 14 },
      angleLines: { color: 'grey' },
         }
  };
  const categoryScore = props.surveyScore.map((category) =>
  category.reduce((agg, curr) => agg + curr, 0));

  const resultScore = categoryScore.reduce((agg, curr) => agg + curr, 0) / 7;
  return (
    <>
      <Menu />
      <FullWidthContainer>
        <Container>

          
          <Title1>
            <h1>
              Vaše celkové skóre v auditu připravenosti na Industry 4.0 je {Math.round(resultScore)}</h1> 
             
            
          </Title1>
          <Text1>
            Výslední skóre je vygenerováno na základě odpovědí, které jste
            zvolili v každém oddílu dotazníku. Níže si můžete prohlédnout graf,
            který ukazuje vaše silné stránky i potenciál na zlepšení. Závěrečnou
            zprávu je možné ihned vytisknout, nebo vygenerovat ve formátu pdf a
            zaslat na vaší emailovou adresu zadanou při registraci.{' '}
          </Text1>
          <Button secondary onClick={() => PrintToPdf()}>Výslední správu vygenerovat do pdf</Button>
          <Title2>
            <h1>
              Návod na čtení výsledků dosáhnutých v jednotlivých oblastech
            </h1>
          </Title2>
          <Text1>
            <h1>21-18 bodů</h1>
            <p>
              Top úroveň - vaše firma je velmi dobře připravená na transformaci
              dle principů Industry 4.0. Ale není dobře spokojit se ze současným
              stavem - konkurence nikdy nespí.
            </p>
            <h1>17-14 bodů</h1>
            <p>
              Střední úroveň - vaše firma je na transformaci dle principů
              Industry 4.0 připravena v některých oblastech. Inspirujte se
              doporučeními, snažte se zejména o systematický přístup k celkovému
              zlepšování. Nezapomínejte na motivaci vašich lidí.
            </p>
            <h1>13-7 bodů</h1>
            <p>
              Vaše firma má ještě velký potenciál v systému a procesech, který
              je potřeba využít pro přípravu na Industry 4.0. Doporučujeme co
              nejdříve začít realizovat projekty, které Vám pomůžou nastartovat
              změny směrem k celkové optimalizaci.
            </p>
          </Text1>
          <Title2>
            <h1>Výsledky vašeho samohodnocení v jednotlivých oblastech:</h1>
          </Title2>
         <TableExampleWarningShorthand tableResult={tableFillData(props)} />
        </Container>
      </FullWidthContainer>

      <Radar data={data} width={300} height={300} legend={{ display: false }} options={options}/>
      <Kontakty />
      <Footer/>
    </>
  );
};

