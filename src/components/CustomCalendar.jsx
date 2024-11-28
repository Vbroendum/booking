import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { useRouteContext } from '@tanstack/react-router';

function CustomCalendar() {
  const [selected, setSelected] = useState(null); // Store a single date instead of an array

  const context = useRouteContext({to: "/bekræftBooking"})

  const handleSelect = (date) => {
    setSelected(date); // Always set the selected date to the newly clicked date
    console.log('Date selected:', dayjs(date).format('DD-MM-YYYY'));
  };

  const dateInfo = {
    selected
  }

  context.setDateInfo(dateInfo)


  return (
    <Calendar
      size="xl"
      minDate={new Date()}
      getDayProps={(date) => ({
        selected: selected && dayjs(date).isSame(selected, 'date'), // Highlight the selected date
        onClick: () => handleSelect(date),
      })}
    />
  );
}

export default CustomCalendar;
