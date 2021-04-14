import { addMonths } from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateComponent = ({ startDate, setStartDate, name }) => (
  <DatePicker
    placeholderText="Selecione uma data"
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    minDate={new Date()}
    maxDate={addMonths(new Date(), 1)}
    name={name}
  />
);

export default DateComponent;
