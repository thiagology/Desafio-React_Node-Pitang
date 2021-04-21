/* eslint-disable max-len */
/* eslint-disable object-curly-newline */

import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import FormikComponent from '../../components/Agendamento/AgendamentoForm';
import Page from '../../components/Page';

const Agendamento = () => {
  const history = useHistory();

  const handleOnClick = async () => {
    history.push('/agendamentos/');
  };

  return (
    <Page title="Cadastro">
      <center>
        <Button className="mb-2" type="button" onClick={handleOnClick}>Ver agendamentos</Button>
      </center>
      <FormikComponent />
    </Page>
  );
};

export default Agendamento;
