/* eslint-disable arrow-body-style */
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardAgendamento = ({ name, date, hour }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Seu agendamento está marcado para dia
          {' '}
          {date}
          {' '}
          às
          {' '}
          {hour}
          {' '}
          horas.
        </Card.Text>
        <Button variant="outline-info" size="sm">Conclusão do atendimento</Button>
      </Card.Body>
    </Card>
  );
};
export default CardAgendamento;
