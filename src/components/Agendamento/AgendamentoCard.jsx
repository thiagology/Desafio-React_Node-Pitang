/* eslint-disable jsx-a11y/label-has-associated-control */
import * as moment from 'moment';
import 'moment/locale/pt-br';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardAgendamento = ({
  name,
  date,
  hour,
  handleCancel,
  isChecked,
  handleConclusion,
  handleChecked,
  conclusion,
}) => (
  <Card style={{ width: '18rem' }} className="cardSch">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        Seu agendamento está marcado para o dia
        {' '}
        {moment(date).format('LL')}
        {' '}
        às
        {' '}
        {moment(hour).format('LT')}
        {' '}
        horas.
      </Card.Text>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="check"
          checked={isChecked}
          onChange={(event) => handleChecked(event)}
        />
        <label
          className="form-check-label"
          htmlFor="check"
        >
          Atendimento concluído
        </label>
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Conclusão do atendimento"
          disabled={!isChecked}
          onChange={(event) => handleConclusion(event)}
          value={conclusion}
        />
      </div>

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
export default CardAgendamento;
