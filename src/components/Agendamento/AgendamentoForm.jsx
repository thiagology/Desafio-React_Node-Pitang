/* eslint-disable max-len */
/* eslint-disable object-curly-newline */

import swal from '@sweetalert/with-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import axios from '../../utils/api';
import Date from '../Date';

const validationSchema = yup?.object().shape({
  name: yup.string().required('Campo obrigatório'),
  date: yup.date().required('Campo obrigatório'),
});

const AgendamentoForm = () => (
  <Formik
    key="formik"
    initialValues={{ name: '', date: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(async () => {
        try {
          await axios.post('/agendamentos', { name: values.name, date: values.date });
          swal({
            title: 'Agendamento registrado!',
            icon: 'success',
          });
        } catch (error) {
          swal({
            title: 'Erro',
            text: `${error.message}`,
            icon: 'warning',
          });
        }
        setSubmitting(false);
      }, 400);
    }}
  >
    {(props) => {
      const {
        values,
        dirty,
        isSubmitting,
        handleSubmit,
        handleReset,
        setFieldValue,
      } = props;
      return (
        <Form className="Form" onSubmit={handleSubmit}>
          <Field className="m-2" name="name" type="text" placeHolder="Nome" />
          <ErrorMessage className="Form-Error" name="name" component="span" />

          <Date name="date" value={values.date} onChange={setFieldValue} />
          <ErrorMessage name="date" component="span" />

          <Button className="m-2" type="submit" name="cadastro">Agendar</Button>
          <Button className="m-2" name="limpar" onClick={handleReset} disabled={!dirty || isSubmitting}>Limpar campos</Button>
        </Form>
      );
    }}
  </Formik>
);

export default AgendamentoForm;
