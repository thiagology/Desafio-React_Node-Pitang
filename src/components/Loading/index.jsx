import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { AgendamentoContext } from '../../pages/Agendamentos/AgendamentoContext';

export default function Loading() {
  const loading = useContext(AgendamentoContext);
  if (loading) {
    return (
      <Spinner animation="border" role="status" />
    );
  }
  return (
    <span>
      Não há agendamentos.
    </span>
  );
}
