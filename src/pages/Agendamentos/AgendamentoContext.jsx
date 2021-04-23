import swal from '@sweetalert/with-react';
import React, { createContext, useEffect, useState } from 'react';
import axios from '../../utils/api';

export const AgendamentoContext = createContext();

export default function AgendamentoContextProvider({ children }) {
  const [agendamentosUS, setAgendamentos] = useState([]);

  // Ordena os agendamentos do menor ao maior
  const agendamentos = agendamentosUS.sort((a, b) => new Date(a.date) - new Date(b.date));

  const fetchData = async () => {
    try {
      const response = await axios.get('/agendamentos');
      setAgendamentos(response.data.data);
    } catch (error) {
      swal(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AgendamentoContext.Provider value={[agendamentos, setAgendamentos, fetchData]}>
      {children}
    </AgendamentoContext.Provider>
  );
}
