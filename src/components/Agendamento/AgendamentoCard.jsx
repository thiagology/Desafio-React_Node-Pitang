/* eslint-disable arrow-body-style */
import swal from '@sweetalert/with-react';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Modal from '../Modal';

const CardAgendamento = ({ name, date, hour }) => {
  const handleCancel = () => {
    swal({
      title: 'Cancelar agendamento',
      text: 'Tem certeza que deseja cancelar?',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            title: 'Agendamento cancelado!',
            icon: 'success',
          });
        } else {
          swal({
            title: 'Agendamento mantido!',
            icon: 'success',
          });
        }
      });
  };

  const handleConclusion = () => {
    <Modal />;
  };
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
