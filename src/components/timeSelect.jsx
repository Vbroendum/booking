import { useState } from 'react';
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
const endTimeOptions = generateTimeOptions('08:00', '17:00');

function TimeSelect() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Handler for start time change
  const handleStartTimeChange = (value) => {
    setStartTime(value);
    console.log('Start Time:', value); // Log the selected start time
  };

  // Handler for end time change
  const handleEndTimeChange = (value) => {
    setEndTime(value);
    console.log('End Time:', value); // Log the selected end time
  };

  const context = useRouteContext({from: "/startBooking"})

  const startTimeInfo = {
    startTime
  }

  context.setStartTimeInfo(startTimeInfo)

  const endTimeInfo = {
    endTime
  }

  context.setEndTimeInfo(endTimeInfo)

  return (
    <Group style={{flexDirection: "row", justifyContent: "center, width"}}>
      <Select
        style={{width: "48.25%"}}
        label="Start Time"
        placeholder="Select start time"
        data={startTimeOptions}
        value={startTime}
        onChange={handleStartTimeChange} // Use the handler
        clearable
      />
      <Select
        style={{width: "48.25%"}}
        label="End Time"
        placeholder="Select end time"
        data={endTimeOptions}
        value={endTime}
        onChange={handleEndTimeChange} // Use the handler
        clearable
      />
    </Group>
  );
}

export default TimeSelect;
