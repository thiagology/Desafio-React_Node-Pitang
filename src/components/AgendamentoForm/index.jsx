/* eslint-disable max-len */
/* eslint-disable object-curly-newline */

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import Date from '../Date';

const validationSchema = yup?.object().shape({
  nome: yup.string().required('Campo obrigatório'),
  date: yup.date().required('Campo obrigatório').nullable(),
});

const AgendamentoForm = ({ handleSubmit }) => {
  const [startDate, setStartDate] = useState(null);

  return (

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

  );
};

export default AgendamentoForm;
