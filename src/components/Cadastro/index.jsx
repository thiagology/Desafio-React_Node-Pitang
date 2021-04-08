/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Page from '../Page';

const Cadastro = () => {
  const [cadastro, setCadastro] = useState('');

  const onChange = ({ targed: value }) => {
    setCadastro(value);
  };

  return (
    <Page title="Cadastro" />

  );
};

export default Cadastro;
