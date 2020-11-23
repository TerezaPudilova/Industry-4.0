import React from 'react';
import { render } from 'react-dom';
import './index.html';
import Survey from './components/survey/Survey.jsx';
import surveyTestData from './components/survey/survey.data.js'

render(
  <>
    <header>
      <h1>Formulář</h1>
    </header>
    <main>
      <Survey mycategory = {surveyTestData.categories}
      />
    </main>
    
  </>,
  document.querySelector('#app'),
);
