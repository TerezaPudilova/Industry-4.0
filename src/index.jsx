import React from 'react';
import { render } from 'react-dom';
import './components/menu.jsx';
import './components/index.jsx';
import './homepage/registerform.jsx';
import { Menu } from './components/menu.jsx';
import { Formular } from './components/index.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UvodniStranka } from './homepage/uvodnistranka.jsx';
import { Postup } from './homepage/postup.jsx';
import { RegisterForm } from './homepage/registerform.jsx';
import { FinalPage } from './finalpage/finalpage.jsx';
import './style.css';
import { Homepage } from './homepage/homepage.jsx';
import { Button } from 'semantic-ui-react';

const App = () => {
  return (
    <>
      <link
        async
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <BrowserRouter>
        <Switch>
          <Route path="/dotaznik" component={Formular} />
          <Route path="/finalPage" component={FinalPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
      <UvodniStranka />
      <Postup />
      <RegisterForm />
    </>
  );
};

render(<App />, document.querySelector('#app'));
