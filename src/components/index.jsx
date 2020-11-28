import React, { useState } from "react";
import { render } from 'react-dom';
import Survey from './survey/Survey.jsx';
import surveyTestData from './survey/survey.data.js'

export const Formular=()=>{ 
return(
  <>
    <header>
      <h1>Formulář</h1>
    </header>
    <main>
      <Survey mycategory = {surveyTestData.categories}
      />
    </main>
    
  </>
);
}
