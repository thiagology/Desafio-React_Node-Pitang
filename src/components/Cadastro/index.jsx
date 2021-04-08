import React, { useState } from 'react';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import Page from '../Page';
// import DatePicker, { registerLocale } from "react-datepicker";
// import br from "date-fns/locale/br";
// registerLocale("br", br);

// import "react-datepicker/dist/react-datepicker.css";

const Cadastro = () => {
  const [cadastro, setCadastro] = useState('');

  const onChange = ({ targed: value }) => {
    setCadastro(value);
  };

  const isFormValid = cadastro.nome;

  return (
    <Page title="Cadastro">
      <Form>
        <Row>
          <Col>
            <Form.Control
              name="name"
              value={cadastro}
              onChange={onChange}
              placeholder="Nome Completo"
            />
          </Col>
        </Row>
        <Button disabled={!isFormValid} type="submit" className="mt-2">
          Cadastrar
        </Button>
      </Form>
    </Page>

  );
};

export default Cadastro;
