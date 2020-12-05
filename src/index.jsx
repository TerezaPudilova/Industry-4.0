import React, { useState } from 'react';
import { render } from 'react-dom';
import './components/menu.jsx';
import './components/index.jsx';
import './homepage/registerform.jsx';
import { Menu } from './components/menu.jsx';
import { Formular } from './components/index.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UvodniStranka } from './homepage/uvodnistranka.jsx';
import { Postup } from './homepage/postup.jsx';
/* import { RegisterForm } from './homepage/registerform.jsx'; */
import { FinalPage } from './finalpage/finalpage.jsx';
import './style.css';
import { Homepage } from './homepage/homepage.jsx';
import { Button } from 'semantic-ui-react';
import { ValidationSchemaExample } from './homepage/registerform.jsx';

const App = () => {
  const [surveyScore, setSurveyScore] = useState(
    new Array(7).fill(new Array(7).fill(0)),
  );

  const handleChange = (newSurveyScore) => {
    setSurveyScore(newSurveyScore);
    console.log(newSurveyScore);
  };

  return (
    <>
      <link
        async
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <BrowserRouter>
        <Switch>
          <Route path="/dotaznik/:categoryCodeName">
            <Formular onChange={handleChange} surveyScore={surveyScore} />
          </Route>
          <Route path="/vysledky">
            <FinalPage surveyScore={surveyScore} />
          </Route>
          <Route path="/registrace">
            <ValidationSchemaExample/> 
          </Route>
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

render(<App />, document.querySelector('#app'));
