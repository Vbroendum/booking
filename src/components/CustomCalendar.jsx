import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { useState, useEffect } from 'react';
import { Calendar } from '@mantine/dates';
import { useRouteContext } from '@tanstack/react-router';

dayjs.extend(localeData);
dayjs.locale('da');

function CustomCalendar({ setSelectedDate }) {
  const [selected, setSelected] = useState(null);

  const context = useRouteContext({ to: "/bekræftBooking" });

  const handleSelect = (date) => {
    const formattedDate = dayjs(date).format('D. MMMM YYYY');
    setSelected(formattedDate);
    setSelectedDate(formattedDate);
    console.log('Date selected:', formattedDate);
  };

  useEffect(() => {
    if (selected) {
      context.setDateInfo({ selected });
    }
  }, [selected, context]);

  return (
    <Calendar
      size="xl"
      minDate={new Date()} // Disables dates before today automatically
      getDayProps={(date) => {
        const isBeforeToday = dayjs(date).isBefore(dayjs(), 'day');
        const isWeekend = [0, 6].includes(dayjs(date).day()); // 0 = Sunday, 6 = Saturday

        return {
          disabled: isBeforeToday || isWeekend,
          selected: selected && dayjs(date).format('D. MMMM YYYY') === selected,
          onClick: !isBeforeToday && !isWeekend ? () => handleSelect(date) : undefined,
        };
      }}
    />
  );
}

export default CustomCalendar;
