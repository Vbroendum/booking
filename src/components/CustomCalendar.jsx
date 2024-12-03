import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { useState, useEffect } from 'react';
import { Calendar } from '@mantine/dates';
import { useRouteContext } from '@tanstack/react-router';

dayjs.extend(localeData);
dayjs.locale('da');

function CustomCalendar({ setSelectedDate }) {
  const [selected, setSelected] = useState(null); // Store a single date instead of an array

  const context = useRouteContext({to: "/bekræftBooking"})

  const handleSelect = (date) => {
    const formattedDate = dayjs(date).format('D. MMMM YYYY')
    setSelected(formattedDate); // Always set the selected date to the newly clicked date
    setSelectedDate(formattedDate); // Update the parent component's state
    console.log('Date selected:', formattedDate)
  };

  useEffect(() => {
    if (selected) {
      context.setDateInfo({ selected }); // Update the date info in context
    }
  }, [selected, context]);
  
  return (
    <Calendar
    setSelectedDate={setSelectedDate}
      size="xl"
      minDate={new Date()}
      getDayProps={(date) => ({
        selected: selected && dayjs(date).format('D. MMMM YYYY') === selected, // Highlight the selected date
        onClick: () => handleSelect(date),
      })}
    />
  );
}

export default CustomCalendar;
