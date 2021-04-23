import swal from '@sweetalert/with-react';
import React, { createContext, useEffect, useState } from 'react';
import axios from '../../utils/api';

export const AgendamentoContext = createContext();

export default function AgendamentoContextProvider({ children }) {
  const [agendamentosUS, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ordena os agendamentos pela data
  const agendamentos = agendamentosUS.sort((a, b) => new Date(a.date) - new Date(b.date)).sort();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/agendamentos');
      setAgendamentos(response.data.data);
    } catch (error) {
      swal(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AgendamentoContext.Provider value={[agendamentos, setAgendamentos, loading, fetchData]}>
      {children}
    </AgendamentoContext.Provider>
  );
}
