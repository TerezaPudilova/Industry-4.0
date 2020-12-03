import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Message,
  Form as FormSemantic,
} from 'semantic-ui-react';
import { CurrentUser } from '../currentUser';
import { db } from '../db.jsx';
import { RegistryForm, Title1 } from '../styles/Container';
import { Menu } from '../components/menu';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

/* const RegisterformItem = (props) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.value);
    props.onChange(e.value);
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

/* export const RegisterForm = (props) => {
  const [formstate, setFormState] = useState('');
  const [isFiledValid, setIsFieldvalid] = useState(true); */

/*  const currentField = /*sem musím dát pole všech Fileds -jak?

  const handleChange = (name, value) => {
    console.log(name, value);
  };

  const validate = () => {
    const unansweredFiled = currentField.filter((field) => {
      return question === 0;
    });

    return unansweredQuestions.length === 0;
  };

  if (categoryIndex === -1) {
    return <Redirect to="/dotaznik/MSA" />;
  };

  const onValidationtHandler = (e) => {
    const isValid = validate();
    if (isValid) {
      setIsCategoryValid(true);
    } else {
      e.preventDefault();
      setIsCategoryValid(false);
    }
  };

  const isError = !props.isFieldValid; */
/* 
  return (
    <>
      <Menu />
      <Title1>Registrační formulář</Title1>
      <Form
        onSubmit={  => {
         preventDefault();
          <CurrentUser
            setUser={{
              jmenoPrijmeni: jmenoPrijmeni.value,
              email: email.value,
              telefon: kontaktniTelefon.value,
              nazevFirmy: nazevFirmy.value,
              pracovniPozice: pracovniPozice.value,
              udaje: udaje.value,
              newsletter: newsletter.value,
            }}
          />;
          db.collection('Registrace').add({
            jmenoPrijmeni: jmenoPrijmeni.value,
            email: email.value,
            telefon: kontaktniTelefon.value,
            nazevFirmy: nazevFirmy.value,
            pracovniPozice: pracovniPozice.value,
            udaje: udaje.value,
            newsletter: newsletter.value,
          });
        }} */
/*   >
        <RegistryForm> */
{
  /*  <Form.Field>
            <label>Jméno</label>
            <input placeholder="Jméno" /> */
}
{
  /* <RegisterformItem */
}
{
  /* onChange={(value) => {
                handleChange('jmenoPrijmeni', value);
              }}
              name="Jméno a příjmení"
              itemName="jmenoPrijmeni"
              type="text" */
}
{
  /* /> */
}
{
  /*  </Form.Field>
          <Form.Field>
            <label>Příjmení</label>
            <input placeholder="Příjmení" /> */
}
{
  /*  <RegisterformItem
              onChange={(value) => {
                handleChange('kontaktniTelefon', value);
              }}
              name="Kontantní telefon"
              itemName="kontaktniTelefon"
              type="tel"
            /> */
}
{
  /*    </Form.Field>
          <Form.Field>
            {' '}
            <label>Email</label>
            <input placeholder="Email" /> */
}
{
  /*  <RegisterformItem
              onChange={(value) => {
                handleChange('email', value);
              }}
              name="e-mail"
              itemName="email"
              type="email"
            /> */
}
{
  /*   </Form.Field>
          <Form.Field>
            <label>Pracovní pozice</label>
            <input placeholder="Pracovní pozice" /> */
}
{
  /* <RegisterformItem
              onChange={(value) => {
                handleChange('pracovniPozice', value);
              }}
              name="Pracovní pozice"
              itemName="pracovniPozice"
              type="text"
            /> */
}
{
  /* </Form.Field>
          <Form.Field>
            <label>Společnost</label>
            <input placeholder="Společnost" /> */
}
{
  /*  <RegisterformItem
              onChange={(value) => {
                handleChange('nazevFirmy', value);
              }}
              name="Název firmy"
              itemName="nazevFirmy"
              type="text"
            /> */
}
{
  /*  </Form.Field> */
}

{
  /*    <Form.Field>
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

          <Link to="/vysledky">
            <Button type="submit">Uložit a pokračovat na výsledky</Button>
            <br />
          </Link>
        </RegistryForm> */
}

{
  /* {!isCategoryValid && (
        <Message
          error
          header="Nelze pokračovat"
          content="Prosím, vyplňte všechny otázky"
        />
      )} */
}
{
  /*     </Form>
    </>
  );
}; */
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  function: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  company: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  souhlasUdaje: Yup.string().required('Required'),
  souhlasNewSletter: Yup.string(),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        function: '',
        company: '',
        souhlasUdaje: '',
        souhlasNewSletter: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
        db.collection('Registrace').add({
          jmenoPrijmeni: values.firstName + ' ' + values.lastName,
          email: values.email,
          // TODO: Dodělat podle potřebných parametrů
        });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormSemantic>
            <Field
              name="firstName"
              render={({ field }) => {
                return (
                  <FormSemantic.Field>
                    <FormSemantic.Input
                      {...field}
                      error={
                        errors.firstName && {
                          content: errors.firstName,
                          pointing: 'below',
                        }
                      }
                      label="Jméno"
                      placeholder="Jméno"
                      fluid
                    />
                  </FormSemantic.Field>
                );
              }}
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="function" />
            {errors.function && touched.function ? (
              <div>{errors.function}</div>
            ) : null}
            <Field name="company" />
            {errors.company && touched.company ? (
              <div>{errors.company}</div>
            ) : null}
            <Field name="souhlasUdaje" type="checkbox" />
            {errors.souhlasUdaje && touched.souhlasUdaje ? (
              <div>{errors.souhlasUdaje}</div>
            ) : null}
            <Field name="souhlasNewsletter" type="checkbox" />
            {errors.souhlasNewsletter && touched.souhlasNewSletter ? (
              <div>{errors.souhlasNewsletter}</div>
            ) : null}
            <button type="submit">Submit</button>
          </FormSemantic>
        </Form>
      )}
    </Formik>
  </div>
);
