import React, { createContext, useEffect, useState } from 'react';
import axios from '../../utils/api';

export const AgendamentoContext = createContext();

export default function AgendamentoContextProvider({ children }) {
  const [agendamento, setAgendamento] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/agendamentos');
      setAgendamento(response.data.data);
    } catch (error) {
      // toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AgendamentoContext.Provider value={[agendamento, setAgendamento, fetchData]}>
      {children}
    </AgendamentoContext.Provider>
  );
}
