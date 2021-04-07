import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Agendamento from './components/Agendamento';
import Cadastro from './components/Cadastro';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Cadastro} />
      <Route path="/agendamentos" exact component={Agendamento} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
