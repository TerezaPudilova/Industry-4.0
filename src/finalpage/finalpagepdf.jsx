import {React} from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { render } from 'react-dom';


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

export const FinalPagePdf = (props) => {
  const data = {
    labels: categoryLabels,
    datasets: [
      {
        backgroundColor: 'rgba(179,181,198,0.4)',
        borderColor: '#003277',
        borderWidth: 3,
        fontFamily: 'Roboto',
       drawDashedLine: ([15, 3, 3, 3]),
        //pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: 'orange',
        //pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: props.surveyScore.map((category) =>
          category.reduce((agg, curr) => agg + curr, 0),
        ),
      },
    ],
  };
  
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
  
  <Document>
    <Page size="A4" style={styles.page}>
      <View >
        
      <Menu />
      <FullWidthContainer>
        <Container>

          <Button>Výslední správu vygenerovat do pdf</Button>
          <Title1>
            <h1>
              Vaše celkové skóre v auditu připravenosti na Industry 4.0 je {Math.round(resultScore)}</h1> 
             
            
          </Title1>
          <p>
            Výslední skóre je vygenerováno na základě odpovědí, které jste
            zvolili v každém oddílu dotazníku. Níže si můžete prohlédnout graf,
            který ukazuje vaše silné stránky i potenciál na zlepšení. Závěrečnou
            zprávu je možné ihned vytisknout, nebo vygenerovat ve formátu pdf a
            zaslat na vaší emailovou adresu zadanou při registraci.{' '}
          </p>
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
    </View>
    </Page>
    </Document>
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

ReactPDF.render(<FinalPagePdf/>);
