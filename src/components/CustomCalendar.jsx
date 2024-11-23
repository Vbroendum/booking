import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function CustomCalendar() {
  const [selected, setSelected] = useState([]);

  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 1) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      size='xl'
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
  );
}

export default CustomCalendar;
