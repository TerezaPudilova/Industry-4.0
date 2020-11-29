import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Menu } from 'semantic-ui-react';
import { CurrentUser } from '../currentUser';
import { db } from '../db.jsx';

/* const RegisterformItem = (props) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    props.onChange(e.target.value);
    t;
  };

  return (
    <>
      <label> {props.name}: </label>
      <input
        value={value}
        onChange={handleChange}
        required
        type={props.type}
        name={props.itemName}
        type="string"
      />
      <br />
    </>
  );
}; */

export const RegisterForm = () => {
  const [formstate, setFormState] = useState('');

  const handleChange = (name, value) => {
    console.log(name, value);
  };

  return (
    <>
      <Menu />
      <div className="registracniFormular">Registrační formulář</div>
      <Form
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
          <Form.Field>
            <label>Jméno</label>
            <input placeholder="Jméno" />
            {/* <RegisterformItem */}
            {/* onChange={(value) => {
                handleChange('jmenoPrijmeni', value);
              }}
              name="Jméno a příjmení"
              itemName="jmenoPrijmeni"
              type="text" */}
            {/* /> */}
          </Form.Field>
          <Form.Field>
            <label>Příjmení</label>
            <input placeholder="Příjmení" />
            {/*  <RegisterformItem
              onChange={(value) => {
                handleChange('kontaktniTelefon', value);
              }}
              name="Kontantní telefon"
              itemName="kontaktniTelefon"
              type="tel"
            /> */}
          </Form.Field>
          <Form.Field>
            {' '}
            <label>Email</label>
            <input placeholder="Email" />
            {/*  <RegisterformItem
              onChange={(value) => {
                handleChange('email', value);
              }}
              name="e-mail"
              itemName="email"
              type="email"
            /> */}
          </Form.Field>
          <Form.Field>
            <label>Pracovní pozice</label>
            <input placeholder="Pracovní pozice" />
            {/* <RegisterformItem
              onChange={(value) => {
                handleChange('pracovniPozice', value);
              }}
              name="Pracovní pozice"
              itemName="pracovniPozice"
              type="text"
            /> */}
          </Form.Field>
          <Form.Field>
          <label>Společnost</label>
            <input placeholder="Společnost" />
            {/*  <RegisterformItem
              onChange={(value) => {
                handleChange('nazevFirmy', value);
              }}
              name="Název firmy"
              itemName="nazevFirmy"
              type="text"
            /> */}
          </Form.Field>
          <div className="souhlas">
            <Form.Field>
              <Checkbox
                value="true"
                name="udaje"
                label="Souhlasím se zpracováním údajů dle Zásad zpracování osobních údajů
            společnosti FBE, s.r.o"
              />
              <Checkbox
                value="true"
                name="newsletter"
                label="Souhlasím
            se zasíláním Newsletteru společnosti FBE, s.r.o 1xměsíčně"
              />
            </Form.Field>
          </div>

          <div className="tlacitka">
            <Link to="/vysledky">
              <Button type="submit">Uložit a pokračovat na výsledky</Button>
              <br />
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};
