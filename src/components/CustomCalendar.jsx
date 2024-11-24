import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function CustomCalendar() {
  const [selected, setSelected] = useState(null); // Store a single date instead of an array

  const handleSelect = (date) => {
    setSelected(date); // Always set the selected date to the newly clicked date
    console.log('Date selected:', dayjs(date).format('YYYY-MM-DD'));
  };

  return (
    <Calendar
      size="xl"
      getDayProps={(date) => ({
        selected: selected && dayjs(date).isSame(selected, 'date'), // Highlight the selected date
        onClick: () => handleSelect(date),
      })}
    />
  );
}

export default CustomCalendar;
