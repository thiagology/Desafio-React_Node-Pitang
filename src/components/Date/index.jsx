import { addMonths } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      placeHolder="Selecione uma data"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 1)}
    />
  );
};

export default DateSelect;
