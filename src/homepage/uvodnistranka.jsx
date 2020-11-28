import React from 'react';
import { Container, FullWidthContainer } from '../styles/Container';
import { colors } from '../styles/variables';
import DefaultTemplate from '../templates/DefaultTemplate';

export const UvodniStranka = () => {
  return (
    <>
      <DefaultTemplate>
        <FullWidthContainer>
          <Container>
            <button className="title">
              Audit připravenosti firmy na implmentaci principů Industry 4.0
            </button>

            <div className="titleText">
              Náš on-line dotazník vám umožní posoudit připravenost vaší
              společnosti na implementaci principů Industry 4.0. <br />
              Na základě jeho výsledků budete moci definovat svoje silné stránky
              i konkrétní potenciály na zlepšení.
            </div>
            <button className="nezzacnete">Než začnete...</button>
          </Container>
        </FullWidthContainer>

        <FullWidthContainer>
          <Container>
            <strong>Průmysl 4.0 </strong>(čtvrtá průmyslová revoluce) je
            označení pro současný trend digitalizace, s ní související
            automatizace výroby a změny na trhu práce. Filosofie Industry 4.0
            nabízí možnosti na vytvoření skutečně štíhlé firmy. Umožňuje
            jednodušší a obsáhlejší pochopení požadavků a potřeb zákazníků (big
            data) a okamžité sdílení potřebných informací přes komplexní řeťězce
            dodávek a sítí. Smart firmy produkují víc, s menším plýtváním - a
            stávají se tak{' '}
            <strong>víc konkurence schopné i na globálních trzích</strong>.
          </Container>
        </FullWidthContainer>

        <FullWidthContainer bgColor={colors.darkBlue}>
          <Container>
            <p>
              Dotazník je rozdělen na 7 průřezových oblastí charakterizujících
              fungování firmy. Každá oblast obsahuje 7 otázek s alternativami
              odpovědí.
            </p>

            <p>
              Výstupem z hodnocení je Závěrečná zpráva, která graficky znázorní
              úroveň vaší společnosti v definovaných oblastech. V závěru uvádí
              tipy na zlepšení.
            </p>

            <div className="graf">
              <img src="img/graf.jpg" alt="graf" />
            </div>
          </Container>
        </FullWidthContainer>
      </DefaultTemplate>
    </>
  );
};
