import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Birth = ({
  name, value, onChange,
}) => (
  <DatePicker
    placeholderText="Selecione uma data"
    selected={(value && new Date(value)) || null}
    onChange={(val) => {
      onChange(name, val);
    }}
    dateFormat="dd/MM/yyyy"
    name={name}
    isClearable
    minDate={new Date(1921, 1, 1)}
    maxDate={new Date()}
    locale={ptBR}
  />
);

export default Birth;
