/* eslint-disable max-len */
/* eslint-disable object-curly-newline */

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import Date from '../Date';
import Page from '../Page';

const validationSchema = yup?.object().shape({
  nome: yup.string().required(),
});

const FormCadastro = ({ handleSubmit }) => (

  <Page title="Cadastro">
    <Formik key="formik" initialValues={{ nome: '' }} handleSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className="Form">
        <Field className="mb-4" name="nome" type="text" placeHolder="Nome" />
        <ErrorMessage className="Form-Error" name="nome" component="span" />
        <Date />
        <Button type="submit" name="cadastro">Agendar cadastro</Button>
        <Button name="limpar">Limpar</Button>
      </Form>
    </Formik>
  </Page>
);

export default FormCadastro;
