import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export const Menu = () => {
  return (
    <>
      <nav className="menu">
        <div className="navigation"></div>
        <div className="logoFBE">
          <img id="logo" src={logo} alt="logoFBE" />
        </div>
        <div className="links">
          <Link className="link" to="/dotaznik">
            Questionnnaire
          </Link>
          <Link className="link" to="/finalPage">
            Finalpage
          </Link>
          <a className="link" href="#">
            FBE Praha
          </a>
          <a className="link" href="#">
            FBE Bratislava
          </a>
        </div>
      </nav>
    </>
  );
};
