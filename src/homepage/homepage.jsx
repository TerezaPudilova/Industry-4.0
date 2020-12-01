import React from 'react';
import { UvodniStranka } from './uvodnistranka.jsx';
import { Postup } from './postup.jsx';
import { Menu } from '../components/menu';

import {Footer} from './footer.jsx'

export const Homepage = () => {
  return (
    <>
      <Menu />
      <UvodniStranka />
      <Postup />
      <Footer/>
    </>
  );
};
