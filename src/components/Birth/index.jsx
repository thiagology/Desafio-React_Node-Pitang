/* eslint-disable arrow-body-style */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Birth = ({
  name, value, onChange,
}) => {
  return (
    <DatePicker
      placeholderText="Selecione uma data"
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        onChange(name, val);
      }}
      dateFormat="dd/MM/yyyy"
      locale="pt-BR"
      name={name}
      isClearable
      minDate={new Date(1921, 1, 1)}
      maxDate={new Date()}
    />
  );
};

export default Birth;
