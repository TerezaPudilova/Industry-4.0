import React from 'react';
import { render } from 'react-dom';
import './homepage/menu.jsx';
import './components/index.jsx';
import './homepage/registerform.jsx';
import { Menu } from './homepage/menu.jsx';
import {Formular} from './components/index.jsx';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {UvodniStranka} from './homepage/uvodnistranka.jsx';
import {Postup} from './homepage/postup.jsx';
import {RegisterForm} from './homepage/registerform.jsx';
import {FinalPage} from './finalpage/finalpage.jsx';

import './style.css';


const App =() => {
  return(
    <>
    <BrowserRouter>
      <Menu/>
      <Switch>
        <Route path="/dotaznik" component={Formular} />
        <Route path="/finalPage" component={FinalPage} />
      </Switch>
    </BrowserRouter>
    <UvodniStranka/>
    <Postup/>
    <RegisterForm/>

    </>
  );
}

render(<App/>, document.querySelector('#app'));
