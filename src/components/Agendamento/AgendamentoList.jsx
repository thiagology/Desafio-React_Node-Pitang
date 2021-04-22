/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import swal from '@sweetalert/with-react';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AgendamentoContext } from '../../pages/Agendamentos/AgendamentoContext';
import axios from '../../utils/api';
import Card from './AgendamentoCard';

const AgendamentoList = () => {
  const [agendamentos, setAgendamentos] = useContext(AgendamentoContext);

  const handleCancel = ({ _id }) => {
    swal({
      title: 'Cancelar agendamento',
      text: 'Tem certeza que deseja cancelar?',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    })
      .then(async (willDelete) => {
        if (willDelete) {
          try {
            const newAgendamentos = agendamentos.filter((agendamento) => agendamento._id !== _id);
            await axios.delete(`/agendamentos/${_id}`);
            setAgendamentos(newAgendamentos);
            swal({
              title: 'Agendamento cancelado!',
              icon: 'success',
            });
          } catch (error) {
            swal({
              title: 'Erro',
              text: `${error.message}`,
              icon: 'warning',
            });
          }
        } else {
          swal({
            title: 'Agendamento mantido!',
            icon: 'success',
          });
        }
      });
  };

  const handleConclusion = () => {
    console.log('Conclusion');
  };

  const handleChecked = async (event, agendamentoEdit) => {
    const { checked: isChecked } = event.target;

    const newAgendamentos = agendamentos.map((agendamento) => {
      if (agendamento._id === agendamentoEdit._id) {
        return {
          ...agendamento,
          isChecked,
        };
      }
      return agendamento;
    });

    try {
      await axios.put(`agendamentos/${agendamentoEdit._id}`, { ...agendamentoEdit, isChecked });
      setAgendamentos(newAgendamentos);
    } catch (error) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'warning',
      });
    }
  };

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
                  isChecked={agendamento.isChecked}
                  handleCancel={() => handleCancel(agendamento)}
                  handleConclusion={() => handleConclusion(agendamento)}
                  handleChecked={(event) => handleChecked(event, agendamento)}
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
