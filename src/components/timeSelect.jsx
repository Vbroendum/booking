/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Select, Group } from '@mantine/core';
import { useRouteContext } from '@tanstack/react-router';

// Generate an array of time options in 24-hour format with 15-minute intervals and specified restrictions
const generateTimeOptions = (minTime, maxTime) => {
  const times = [];
  const [minHour, minMinute] = minTime.split(':').map(Number);
  const [maxHour, maxMinute] = maxTime.split(':').map(Number);

  // Loop through time and add intervals of 15 minutes
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

const startTimeOptions = generateTimeOptions('08:00', '14:00');
const endTimeOptions = generateTimeOptions('08:15', '17:00');

function TimeSelect({ setSelectedStartTime, setSelectedEndTime }) {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const context = useRouteContext({ from: "/startBooking" });

  const filteredEndTimeOptions = endTimeOptions.filter(
    (option) => !startTime || option.value > startTime
  )

  // Update context with startTime
  useEffect(() => {
    if (startTime) {
      context.setStartTimeInfo({ startTime });
    }
  }, [startTime, context]);

  // Update context with endTime
  useEffect(() => {
    if (endTime) {
      context.setEndTimeInfo({ endTime });
    }
  }, [endTime, context]);

  // Handler for start time change
  const handleStartTimeChange = (value) => {
    setStartTime(value);
    setSelectedStartTime(value); // Update the parent component's state
    console.log('Start Time:', value);
  };

  // Handler for end time change
  const handleEndTimeChange = (value) => {
    setEndTime(value);
    setSelectedEndTime(value); // Update the parent component's state
    console.log('End Time:', value);
  };

  return (
    <Group style={{flexDirection: "row", justifyContent: "center, width"}}>
      <Select
        style={{width: "47.5%"}}
        label="Start tidspunkt"
        placeholder="Vælg start tidspunkt"
        data={startTimeOptions}
        value={startTime}
        onChange={handleStartTimeChange} // Use the handler
        clearable
      />
      <Select
        style={{width: "47.5%"}}
        label="Slut tidspunkt"
        placeholder="Vælg start tidspunkt"
        data={filteredEndTimeOptions}
        value={endTime}
        onChange={handleEndTimeChange} // Use the handler
        disabled={!startTime}
        clearable
      />
    </Group>
  );
}

export default TimeSelect;
