import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Page from '../Page';
import Card from './CardAgendamento';

const Agendamento = () => {
  const history = useHistory();

  const handleOnClick = async () => {
    history.push('/');
  };

  return (
    <Page title="Agendamentos">
      <Button type="button" onClick={handleOnClick}>Página de cadastro</Button>
      <Card name="patricia" date="123" hour="123" />
    </Page>

  );
};

export default Agendamento;
