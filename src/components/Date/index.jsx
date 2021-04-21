/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateComponent = ({ name, value, onChange }) => {
  return (
    <DatePicker
      placeholderText="Selecione uma data"
      selected={(value && new Date(value)) || null}
      onChange={val => {
        onChange(name, val);
      }}
      dateFormat="dd/MM/yyyy"
      name={name}
    />
  );
};

export default DateComponent;
