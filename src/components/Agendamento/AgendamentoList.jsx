/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AgendamentoContext } from '../../pages/Agendamentos/AgendamentoContext';
import Card from './AgendamentoCard';

const AgendamentoList = () => {
  const [agendamentos, setAgendamentos] = useContext(AgendamentoContext);

  return (
    <Container>
      <Row>
        {agendamentos.length ? (
          agendamentos.map((agendamento, index) => {
            return (
              <Col key={index}>
                <Card
                  name={agendamento.name}
                  date={agendamento.date}
                  hour={agendamento.hour}
                />
              </Col>

            );
          })

        ) : (
          <span className="empty-state">
            Não há agendamentos.
          </span>
        )}
      </Row>
    </Container>

  );
};

export default AgendamentoList;
