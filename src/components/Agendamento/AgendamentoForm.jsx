/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */

import swal from '@sweetalert/with-react';
import {
  ErrorMessage, Field, Form, Formik
} from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import axios from '../../utils/api';
import Birth from '../Birth';
import Date from '../Date';
import TimePicker from '../Hour';

const validationSchema = yup?.object().shape({
  name: yup.string().required(' Campo obrigatório').typeError(' Campo obrigatório'),
  birth: yup.date().required(' Campo obrigatório').typeError(' Campo obrigatório'),
  date: yup.date().required(' Campo obrigatório').typeError(' Campo obrigatório'),
  hour: yup.object().required(' Campo obrigatório').typeError(' Campo obrigatório'),
});

const AgendamentoForm = () => (
  <Formik
    key="formik"
    initialValues={{
      name: '', date: '', birth: '', hour: ''
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(async () => {
        try {
          await axios.post('/agendamentos', {
            name: values.name,
            date: values.date,
            birth: values.birth,
            hour: values.hour
          });
          swal({
            title: 'Agendamento registrado!',
            icon: 'success',
          });
        } catch (error) {
          console.log(error);
          swal({
            title: 'Erro',
            text: `${error.response.data.message}`,
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

        <Form className="Form" onSubmit={handleSubmit} autocomplete="off">
          <label htmlFor="name">Nome Completo: </label>
          <Field className="m-2" name="name" type="text" placeHolder="Nome" />
          <ErrorMessage className="Form-Error" name="name" component="span" />
          <br />

          <label htmlFor="birth">Data de nascimento:  </label>
          <Birth name="birth" value={values.birth} onChange={setFieldValue} />
          <ErrorMessage name="birth" component="span" />
          <br />

          <label htmlFor="date">Data da vacina:  </label>
          <Date
            name="date"
            value={values.date}
            onChange={setFieldValue}
          />
          <ErrorMessage name="date" component="span" />
          <br />

          <label htmlFor="hour">Hora:  </label>
          <TimePicker
            name="hour"
            value={values.hour}
            onChange={setFieldValue}
          />
          <ErrorMessage name="hour" component="span" />
          <br />

          <Button className="m-2" type="submit" name="cadastro">Agendar</Button>
          <Button className="m-2" name="limpar" onClick={handleReset} disabled={!dirty || isSubmitting}>Limpar campos</Button>
        </Form>
      );
    }}
  </Formik>
);

export default AgendamentoForm;
