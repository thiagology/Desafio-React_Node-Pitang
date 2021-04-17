import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Agendamentos from './pages/Agendamentos';
import Cadastro from './pages/Cadastro';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Cadastro} />
      <Route path="/agendamentos" exact component={Agendamentos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
