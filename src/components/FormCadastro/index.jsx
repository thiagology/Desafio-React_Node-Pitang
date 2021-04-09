/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import Page from '../Page';
// import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const validationSchema = yup?.object().shape({
  nome: yup.string().required(),
});

const FormCadastro = ({ handleSubmit }) => (
  <Page title="Cadastro">
    <Formik initialValues={{ nome: '' }} handleSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className="Form">
        <Field className="Form-Field" name="nome" type="text" placeHolder="Nome" />
        <ErrorMessage className="Form-Error" name="nome" component="span" />
        <Button type="submit" name="cadastro">Agendar cadastro</Button>
      </Form>
    </Formik>
  </Page>

);

export default FormCadastro;
