import React from 'react';
import { UvodniStranka } from './uvodnistranka.jsx';
import { Postup } from './postup.jsx';
import { Menu } from '../components/menu';



export const Homepage = () => {
  return (
    <>
    <Menu />
       <UvodniStranka />
      <Postup />
    </>
  );
}