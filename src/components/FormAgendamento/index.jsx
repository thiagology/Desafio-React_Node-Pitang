/* eslint-disable max-len */
/* eslint-disable object-curly-newline */

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Date from '../Date';
import Page from '../Page';

const validationSchema = yup?.object().shape({
  nome: yup.string().required('Campo obrigatório'),
  date: yup.date().required('Campo obrigatório').nullable(),
});

const FormCadastro = ({ handleSubmit }) => {
  const [startDate, setStartDate] = useState(null);
  const history = useHistory();

  const handleOnClick = async () => {
    history.push('/agendamentos/');
  };

  return (
    <Page title="Cadastro">
      <Button type="button" onClick={handleOnClick}>Ver agendamentos</Button>
      <Formik key="formik" initialValues={{ nome: '', date: null }} handleSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className="Form">
          <Field className="m-2" name="nome" type="text" placeHolder="Nome" />
          <ErrorMessage className="Form-Error" name="nome" component="span" />
          <Date startDate={startDate} setStartDate={setStartDate} name="date" />
          <ErrorMessage name="date" component="span" />
          <Button className="m-2" type="submit" name="cadastro">Agendar</Button>
          <Button className="m-2" name="limpar">Limpar campos</Button>
        </Form>
      </Formik>
    </Page>
  );
};

export default FormCadastro;
