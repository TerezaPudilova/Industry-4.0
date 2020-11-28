import React, { useState } from 'react';
import { render } from 'react-dom';
import Survey from './survey/Survey.jsx';
import surveyTestData from './survey/survey.data.js';
import { Menu } from './menu.jsx';
import { Container } from 'semantic-ui-react';

export const Formular = (props) => {
  return (
    <>
      <Menu />
      <Container>
        <main>
          <Survey
            categories={surveyTestData.categories}
            onChange={props.onChange}
            surveyScore={props.surveyScore}
          />
        </main>
      </Container>
    </>
  );
};
