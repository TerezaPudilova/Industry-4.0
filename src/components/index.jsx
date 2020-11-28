import React, { useState } from 'react';
import { render } from 'react-dom';
import Survey from './survey/Survey.jsx';
import surveyTestData from './survey/survey.data.js';
import { Menu } from './menu.jsx';
import { Container } from 'semantic-ui-react';

export const Formular = () => {
  return (
    <>
      <Menu />
      <Container>
        <header>
          <h1>Formulář</h1>
        </header>
        <main>
          <Survey categories={surveyTestData.categories} />
        </main>
      </Container>
    </>
  );
};
