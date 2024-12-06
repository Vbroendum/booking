/* eslint-disable react/prop-types */
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/da'; 
import { useState, useEffect } from 'react';
import { Calendar } from '@mantine/dates';
import { useRouteContext } from '@tanstack/react-router';

dayjs.extend(localeData); //"dayjs.extend(localeData)" Udvider dayjs med funktionalitet til at arbejde med lokalitetsdata (fx sprog og datofunktioner)
dayjs.locale('da'); //"dayjs.locale('da')" Sætter dayjs til at bruge dansk som sprog, hvilket betyder, at måneder og ugedage vil blive vist på dansk.

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
      minDate={new Date()}
      locale="da"
      maxDate={dayjs().add(1, 'year').toDate()}
      getDayProps={(date) => {
        const isBeforeToday = dayjs(date).isBefore(dayjs(), 'day');
        const isWeekend = [0, 6].includes(dayjs(date).day());

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
