import React from 'react';
import { render } from 'react-dom';
import './index.html';
import Category from './components/category/Category.jsx';
import categoryTestData from './components/category/category.data.ts';


render(
  <>
    <header>
      <h1>Formulář</h1>
    </header>
    <main>
      <p>První nástřel formuláře</p>
      <Category 
      name={categoryTestData.name} 
      description={categoryTestData.description}
      questions={categoryTestData.questions}
      />
    </main>
    
  </>,
  document.querySelector('#app'),
);
