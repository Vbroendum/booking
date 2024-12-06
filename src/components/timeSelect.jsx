/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Select, Group } from '@mantine/core';
import { useRouteContext } from '@tanstack/react-router';


// Genererer et array af tidsmuligheder i 24-timers format med 15-minutters intervaller
const generateTimeOptions = (minTime, maxTime) => {
  const times = [];
  const [minHour, minMinute] = minTime.split(':').map(Number);
  const [maxHour, maxMinute] = maxTime.split(':').map(Number);

  // Looper igennem tiderne og tilføjer intervaller af 15 minutter
  for (let hour = minHour; hour <= maxHour; hour++) {
    const startMinute = hour === minHour ? minMinute : 0;
    const endMinute = hour === maxHour ? maxMinute : 60;

    for (let minute = startMinute; minute < endMinute; minute += 15) {
      const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      times.push({ value: formattedTime, label: formattedTime });
    }
  }
  return times;
};

// Sætter valgte start -og sluttider
const startTimeOptions = generateTimeOptions('08:00', '14:00');
const endTimeOptions = generateTimeOptions('08:15', '17:00');

function TimeSelect({ setSelectedStartTime, setSelectedEndTime }) {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const context = useRouteContext({ from: "/startBooking" });

  const filteredEndTimeOptions = endTimeOptions.filter(
    (option) => !startTime || option.value > startTime
  )

  // Gemmer starttidspunktet i context
  useEffect(() => {
    if (startTime) {
      context.setStartTimeInfo({ startTime });
    }
  }, [startTime, context]);

  // Gemmer sluttidspunktet i context
  useEffect(() => {
    if (endTime) {
      context.setEndTimeInfo({ endTime });
    }
  }, [endTime, context]);

  // Håndterer ændring af starttidspunkt
  const handleStartTimeChange = (value) => {
    setStartTime(value);
    setSelectedStartTime(value); // Opdaterer forældrekomponentens tilstand
  };

  // Håndterer ændring af sluttidspunkt
  const handleEndTimeChange = (value) => {
    setEndTime(value);
    setSelectedEndTime(value); // Opdaterer forældrekomponentens tilstand
  };

  return (
    <Group style={{flexDirection: "row", justifyContent: "center, width"}}>
      <Select
        style={{width: "47.5%"}}
        label="Start tidspunkt"
        placeholder="Vælg start tidspunkt"
        withAsterisk
        data={startTimeOptions}
        value={startTime}
        onChange={handleStartTimeChange} // Benytter handleren af starttidspunktets ændring
        clearable
        closeOnChange
      />
      <Select
        style={{width: "47.5%"}}
        label="Slut tidspunkt"
        placeholder="Vælg slut tidspunkt"
        withAsterisk
        data={filteredEndTimeOptions}
        value={endTime}
        onChange={handleEndTimeChange} // Benytter handleren af sluttidspunktets ændring
        disabled={!startTime}
        clearable
        closeOnChange
      />
    </Group>
  );
}

export default TimeSelect;
