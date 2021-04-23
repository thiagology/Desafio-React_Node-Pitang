/* eslint-disable jsx-a11y/label-has-associated-control */

import swal from '@sweetalert/with-react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import axios from '../../utils/api';
import Birth from '../Birth';
import Date from '../Date';
import TimePicker from '../Hour';

const validationSchema = yup?.object().shape({
  name: yup.string().required(' *Campo obrigatório').typeError(' *Campo obrigatório'),
  birth: yup.date().required(' *Campo obrigatório').typeError(' *Campo obrigatório'),
  date: yup.date().required(' *Campo obrigatório').typeError(' *Campo obrigatório'),
  hour: yup.object().required(' *Campo obrigatório').typeError(' *Campo obrigatório'),
});

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(async () => {
    swal({
      title: 'Confirmar dados',
      text: `Nome: ${values.name}

            Idade: ${moment().diff(values.birth, 'years')}

            Data da vacina: ${moment(values.date).format('LL')}

            Hora da vacina: ${moment(values.hour).format('LT')} `,
      icon: 'warning',
      buttons: ['Cancelar', 'Confirmar'],
      dangerMode: true,
    })
      . then(async (isSubimit) => {
        if (isSubimit) {
          try {
            await axios.post('/agendamentos', {
              name: values.name,
              date: values.date,
              birth: values.birth,
              hour: values.hour,
            });
            swal({
              title: 'Agendamento registrado!',
              text: `Nome: ${values.name}

              Idade: ${moment().diff(values.birth, 'years')}

              Data da vacina: ${moment(values.date).format('LL')}

              Hora da vacina: ${moment(values.hour).format('LT')} `,
              icon: 'success',
            });
          } catch (error) {
            swal({
              title: 'Erro',
              text: `${error.response.data.message}`,
              icon: 'warning',
            });
          }
        }
      });
    setSubmitting(false);
  }, 400);
};

const AgendamentoForm = () => (
  <Formik
    key="formik"
    initialValues={{
      name: '', date: '', birth: '', hour: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => onSubmit(values, { setSubmitting })}
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
          <Field
            className="inputForm"
            name="name"
            type="text"
            placeHolder="Nome"
          />
          <ErrorMessage
            className="Form-Error"
            name="name"
            component="span"
            style={{ color: 'red' }}
          />
          <br />
          <br />

          <label htmlFor="birth">Data de nascimento:  </label>
          <Birth
            className="inputForm"
            name="birth"
            value={values.birth}
            onChange={setFieldValue}
          />
          <ErrorMessage
            name="birth"
            component="span"
            style={{ color: 'red' }}
          />
          <br />
          <br />

          <label htmlFor="date">Data da vacinação:  </label>
          <Date
            className="inputForm"
            name="date"
            value={values.date}
            onChange={setFieldValue}
          />
          <ErrorMessage
            name="date"
            component="span"
            style={{ color: 'red' }}
          />
          <br />
          <br />

          <label htmlFor="hour">Hora:  </label>
          <TimePicker
            className="inputForm"
            name="hour"
            value={values.hour}
            onChange={setFieldValue}
          />
          <ErrorMessage
            name="hour"
            component="span"
            style={{ color: 'red' }}
          />
          <br />
          <br />

          <Button className="buttonForm" type="submit" name="cadastro">Agendar</Button>
          <Button className="buttonForm" name="limpar" onClick={handleReset} disabled={!dirty || isSubmitting}>Limpar campos</Button>
        </Form>
      );
    }}
  </Formik>
);

export default AgendamentoForm;
