import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AgendamentoList from '../../components/Agendamento/AgendamentoList';
import Page from '../../components/Page';
import AgendamentoContextProvider from './AgendamentoContext';

const Agendamentos = () => {
  const history = useHistory();

  const handleOnClick = async () => {
    history.push('/');
  };

  return (
    <Page title="Agendamentos">
      <Button type="button" onClick={handleOnClick}>Página de cadastro</Button>
      <AgendamentoList />
    </Page>

  );
};

export default () => (
  <AgendamentoContextProvider>
    <Agendamentos />
  </AgendamentoContextProvider>
);
