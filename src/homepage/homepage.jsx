import React from 'react';
import { UvodniStranka } from './uvodnistranka.jsx';
import { Postup } from './postup.jsx';
import { Menu } from '../components/menu';
import { Button } from 'semantic-ui-react';
import {Footer} from './footer.jsx'

export const Homepage = () => {
  return (
    <>
      <Menu />
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <UvodniStranka />
      <Postup />
      <Footer/>
    </>
  );
};
