import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Message,
  Form as FormSemantic,
  Container,
} from 'semantic-ui-react';
import { CurrentUser } from '../currentUser';
import { db } from '../db.jsx';
import { RegistryForm, Title1, Text1 } from '../styles/Container';
import { Menu } from '../components/menu';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Footer } from './footer';


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(50, 'Příliž dlouhé!')
    .required('Povinný údaj'),
  lastName: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(50, 'Příliž dlouhé!')
    .required('Povinný údaj'),
  email: Yup.string().email('Invalid email').required('Povinný údaj'),
  occupation: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(50, 'Příliž dlouhé!')
    .required('Povinný údaj'),
  company: Yup.string()
    .min(2, 'Příliš krátké!')
    .max(50, 'Příliž dlouhé!')
    .required('Povinný údaj'),
  souhlasUdaje: Yup.boolean().oneOf([true], 'Povinný údaj'),
  souhlasNewsletter: Yup.boolean(),
});

export const ValidationSchemaExample = () => {
  const history = useHistory();
  return (
    <>
      <Menu />
      <Container>
        <RegistryForm>
          <Title1>Registrace</Title1>
          <Text1>Pro zobrazení výsledků se prosím registrujte</Text1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              occupation: '',
              company: '',
              souhlasUdaje: false,
              souhlasNewsletter: false,
            }}
            validationSchema={SignupSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => {
              console.log(values);
              db.collection('Registrace')
                .add({
                  jmenoPrijmeni: values.firstName + ' ' + values.lastName,
                  email: values.email,

                  nazevFirmy: values.company,
                  pracovniPozice: values.occupation,
                  udaje: values.souhlasUdaje,
                  newsletter: values.souhlasNewsletter,
                })
                .then(() => {
                  history.push('/vysledky');
                });
            }}
          >
            {({ errors, touched, handleSubmit }) => (
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
                  <Field
                    name="lastName"
                    render={({ field }) => {
                      return (
                        <FormSemantic.Field>
                          <FormSemantic.Input
                            {...field}
                            error={
                              errors.lastName && {
                                content: errors.lastName,
                                pointing: 'below',
                              }
                            }
                            label="Příjmení"
                            placeholder="Příjmení"
                            fluid
                          />
                        </FormSemantic.Field>
                      );
                    }}
                  />
                  <Field
                    name="email"
                    render={({ field }) => {
                      return (
                        <FormSemantic.Field>
                          <FormSemantic.Input
                            {...field}
                            error={
                              errors.email && {
                                content: errors.email,
                                pointing: 'below',
                              }
                            }
                            label="Email"
                            placeholder="Email"
                            fluid
                          />
                        </FormSemantic.Field>
                      );
                    }}
                  />
                  <Field
                    name="occupation"
                    render={({ field }) => {
                      return (
                        <FormSemantic.Field>
                          <FormSemantic.Input
                            {...field}
                            error={
                              errors.occupation && {
                                content: errors.occupation,
                                pointing: 'below',
                              }
                            }
                            label="Funkce"
                            placeholder="Funkce"
                            fluid
                          />
                        </FormSemantic.Field>
                      );
                    }}
                  />
                  <Field
                    name="company"
                    render={({ field }) => {
                      return (
                        <FormSemantic.Field>
                          <FormSemantic.Input
                            {...field}
                            error={
                              errors.company && {
                                content: errors.company,
                                pointing: 'below',
                              }
                            }
                            label="Společnost"
                            placeholder="Společnost"
                            fluid
                          />
                        </FormSemantic.Field>
                      );
                    }}
                  />
                  <Field
                    name="souhlasUdaje"
                    render={({ field, form, meta }) => {
                      return (
                        <FormSemantic.Field>
                          <Checkbox
                            onChange={() => {
                              form.setFieldValue('souhlasUdaje', !field.value);
                            }}
                            name="souhlasUdaje"
                            error={
                              errors.souhlasUdaje && {
                                content: errors.souhlasUdaje,
                                pointing: 'below',
                              }
                            }
                            label="Souhlasím se zpracováním údajů dle Zásad zpracování osobních údajů
                     společnosti FBE, s.r.o"
                            /* fluid */
                          />
                        </FormSemantic.Field>
                      );
                    }}
                  />
                  <Field
                    name="souhlasNewsletter"
                    render={({ field, form, meta }) => {
                      return (
                        <FormSemantic.Field>
                          <Checkbox
                            onChange={() => {
                              form.setFieldValue(
                                'souhlasNewsletter',
                                !field.value,
                              );
                            }}
                            name="souhlasNewsletter"
                            error={
                              errors.souhlasNewsletter && {
                                content: errors.souhlasNewsletter,
                                pointing: 'below',
                              }
                            }
                            label="Souhlasím
                     se zasíláním Newsletteru společnosti FBE, s.r.o 1xměsíčně"

                            /* fluid */
                          />
                        </FormSemantic.Field>
                      );
                    }}
                  />

                  <Button type="submit">Uložit a pokračovat na výsledky</Button>
                  <br />
                </FormSemantic>
              </Form>
            )}
          </Formik>
        </RegistryForm>
      </Container>
      <Footer />
    </>
  );
};
