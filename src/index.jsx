import React from 'react';
import { render } from 'react-dom';
import './index.html';
import Question from './components/question/Question.jsx'
import Category from './components/category/Category.jsx'
import questionTestData from './components/question/question.data.ts';

render(
  <>
    <header>
      <h1>Formulář</h1>
    </header>
    <main>
      <p>První nástřel formuláře</p>
      <Question question={questionTestData.question} answers={questionTestData.answers}/>
    </main>
    
  </>,
  document.querySelector('#app'),
);
