import React from 'react';
import { Container, FullWidthContainer } from '../styles/Container';

export const Postup = () => {
  return (
    <>
      <FullWidthContainer>
        <Container>
          <p className="nezZacneteButton">Než začnete</p>

          <ol>
            <li>Na začátku vás čeká jednoduchá registrace</li>
            <li>Samohodnocení vám zabere cca 30-60 minut</li>
            <li>Budete vyplňovat 7 oddílů po 7 otázkách</li>
            <li>
              Pro obdržení Závěrečné zprávy je nutné odpověděť na všechny otázky
            </li>
            <li>
              K již zodpovězeným otázkám je možné se vrátit a případně upravit
              hodnocení
            </li>
            <li>
              Dotazník je nutné vyplnit najednou, průběžné výsledky se
              neukládají
            </li>
          </ol>
        </Container>
      </FullWidthContainer>
    </>
  );
};
