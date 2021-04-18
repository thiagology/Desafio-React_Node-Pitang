import React, { createContext, useEffect, useState } from 'react';
import axios from '../../utils/api';

export const AgendamentoContext = createContext();

export default function AgendamentoContextProvider({ children }) {
  const [agendamentos, setAgendamentos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/agendamentos');
      setAgendamentos(response.data.data);
    } catch (error) {
      console.log(error);
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
