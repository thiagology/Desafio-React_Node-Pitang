/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Page from '../Page';

export default function Agendamento() {
  const [agendamento, setAgendamento] = useState('');

  const onChange = ({ targed: value }) => {
    setAgendamento(value);
  };

  return (
    <Page title="Agendamentos" />

  );
}
