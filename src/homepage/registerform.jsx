import React, {useState} from 'react';
import { CurrentUser } from '../currentUser';
import { db } from '../db.jsx';


const RegisterformItem = (props) => {
  const [value, setValue] = useState('');
  const handleChange=(e)=>{
    setValue(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <>
      <label> {props.name}: </label>
      <input value={value} onChange={handleChange} required type={props.type} name={props.itemName} type="string" />
      <br />
    </>
  );
};

export const RegisterForm = () => {
  const[formstate, setFormState]=useState('');


  const handleChange=(name,value)=>{
  console.log(name,value)
}

  return (
    <>
      <div className="registracniFormular">Registrační formulář</div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          <CurrentUser
            setUser={{
              jmenoPrijmeni: event.target.jmenoPrijmeni.value,
              email: event.target.email.value,
              telefon: event.target.kontaktniTelefon.value,
              nazevFirmy: event.target.nazevFirmy.value,
              pracovniPozice: event.target.pracovniPozice.value,
              udaje: event.target.udaje.value,
              newsletter: event.target.newsletter.value,
            }}
          />;
          db.collection('Registrace').add({
            jmenoPrijmeni: event.target.jmenoPrijmeni.value,
            email: event.target.email.value,
            telefon: event.target.kontaktniTelefon.value,
            nazevFirmy: event.target.nazevFirmy.value,
            pracovniPozice: event.target.pracovniPozice.value,
            udaje: event.target.udaje.value,
            newsletter: event.target.newsletter.value,
          });
        }}
      >
        <div className="registrationForm">
          <RegisterformItem onChange={(value)=>{handleChange ('jmenoPrijmeni',value)}}
            name="Jméno a příjmení"
            itemName="jmenoPrijmeni"
            type="text"
          />
          <RegisterformItem onChange={(value)=>{handleChange ('kontaktniTelefon',value)}}
            name="Kontantní telefon"
            itemName="kontaktniTelefon"
            type="tel"
          />
          <RegisterformItem onChange={(value)=>{handleChange ('email',value)}}
          name="e-mail" 
          itemName="email"
           type="email" />
         
          <RegisterformItem onChange={(value)=>{handleChange ('pracovniPozice',value)}}
            name="Pracovní pozice"
            itemName="pracovniPozice"
            type="text"
          />
          <RegisterformItem onChange={(value)=>{handleChange ('nazevFirmy',value)}}
            name="Název firmy"
            itemName="nazevFirmy"
            type="text"
          />

          <div className="souhlas">
            <input required type="checkbox" value="true" name="udaje" />{' '}
            Souhlasím se zpracováním údajů dle Zásad zpracování osobních údajů
            společnosti FBE, s.r.o
            <br />
            <input type="checkbox" value="true" name="newsletter" /> Souhlasím
            se zasíláním Newsletteru společnosti FBE, s.r.o 1xměsíčně
            <br />
          </div>

          <div className="tlacitka">
            <button type="submit">
              Uložit data a pokračovat vyplňováním dotazníku
            </button>{' '}
            <br />
          </div>
        </div>
      </form>
    </>
  );
};