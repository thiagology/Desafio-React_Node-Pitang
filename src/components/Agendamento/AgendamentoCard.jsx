/* eslint-disable arrow-body-style */

import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardAgendamento = ({
  name, date, hour, handleConclusion, handleCancel,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Seu agendamento está marcado para o dia
          {' '}
          {date}
          {' '}
          às
          {' '}
          {hour}
          {' '}
          horas.
        </Card.Text>
        <Button
          variant="outline-info"
          size="sm"
          onClick={handleConclusion}
        >
          Conclusão do atendimento
        </Button>
        <Button
          className="mt-2"
          variant="outline-danger"
          size="sm"
          onClick={handleCancel}
        >
          Cancelar agendamento
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CardAgendamento;
