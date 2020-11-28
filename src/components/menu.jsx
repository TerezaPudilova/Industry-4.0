import React from "react";
import { Link } from 'react-router-dom';


export const Menu=()=>{

  return(
    <>
    <nav className="menu">
      <div className="navigation"></div>
      <div className="logoFBE">
        <img id="logo" src="./img/logoFBE.jpg" alt="logoFBE"/>
      </div>
      <div className="links">
        <Link className="link" to="/dotaznik" >Questionnnaire</Link>
        <Link className="link" to="/finalPage" >Finalpage</Link>
        <a className="link" href="#">FBE Praha</a>
        <a className="link" href="#">FBE Bratislava</a>
      </div>
    </nav>
  </>
); 
}