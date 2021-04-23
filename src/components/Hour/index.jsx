import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import React from 'react';

const Hour = ({ value, name, onChange }) => (
  <TimePicker
    selected={value}
    onChange={(val) => onChange(name, val)}
    minuteStep={30}
    showSecond={false}
    disabledHours={
        () => [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]
      }
    hideDisabledOptions
  />
);

export default Hour;
