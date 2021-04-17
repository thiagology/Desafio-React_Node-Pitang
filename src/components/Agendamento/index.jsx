import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Page from '../Page';

const Agendamento = () => {
  const history = useHistory();

  const handleOnClick = async () => {
    history.push('/');
  };

  return (
    <Page title="Agendamentos">
      <Button type="button" onClick={handleOnClick}>Página de cadastro</Button>
    </Page>

  );
};

export default Agendamento;
