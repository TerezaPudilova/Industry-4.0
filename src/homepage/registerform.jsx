
import React from 'react';
import {CurrentUser} from '../currentUser';
import {db} from '../db.jsx';



const RegisterformItem=(props)=> {
  return(
    <>
  <label> {props.name}: </label>
  <input required type={props.type} name= {props.itemName}
  type="string" />
<br/>
</>
  )
};

export const RegisterForm =()=>{
  

      return (
  <>
  <div className="registracniFormular">Registrační formulář</div>
  <form onSubmit={(event)=>{
      event.preventDefault();
      <CurrentUser setUser={{
        jmenoPrijmeni: event.target.jmenoPrijmeni.value,
        email: event.target.email.value,
        telefon: event.target.kontaktniTelefon.value,
        nazevFirmy: event.target.nazevFirmy.value,
        pracovniPozice: event.target.pracovniPozice.value,
        udaje: event.target.udaje.value,
        newsletter:event.target.newsletter.value
      } }/>
      db.collection('Registrace').add({
        jmenoPrijmeni: event.target.jmenoPrijmeni.value,
        email: event.target.email.value,
        telefon: event.target.kontaktniTelefon.value,
        nazevFirmy: event.target.nazevFirmy.value,
        pracovniPozice: event.target.pracovniPozice.value,
        udaje: event.target.udaje.value,
        newsletter:event.target.newsletter.value
      });
    }} >

  <div className="registrationForm">
    <RegisterformItem name="Jméno a příjmení" itemName="jmenoPrijmeni" type="text"/>
    <RegisterformItem name="Kontantní telefon" itemName="kontaktniTelefon" type="tel"/>
    <RegisterformItem name="e-mail" itemName="email" type="email"/>
    <RegisterformItem name="Pracovní pozice" itemName="pracovniPozice" type="text"/>
    <RegisterformItem name="Název firmy" itemName="nazevFirmy" type="text"/>

    <div className="souhlas">
      <input required type="checkbox"  value="true" name="udaje" /> Souhlasím se zpracováním údajů dle Zásad zpracování osobních údajů společnosti FBE, s.r.o
      <br/>
      <input type="checkbox"  value="true" name="newsletter"/> Souhlasím se zasíláním Newsletteru společnosti FBE, s.r.o 1xměsíčně
      <br/>
    </div>

    <div className="tlacitka">
      <button type="submit">Uložit data a pokračovat vyplňováním dotazníku</button> <br/>
    </div>

  </div>
  </form>
  </>
  );
  }
 
    