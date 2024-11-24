import { useState } from 'react';
import { TimeInput } from '@mantine/dates';

function TimeRangePicker() {
  const [startTime, setStartTime] = useState(null); // State for start time
  const [endTime, setEndTime] = useState(null); // State for end time

  const handleStartTimeChange = (value) => {
    setStartTime(value);
    if (endTime) {
      console.log(
        `Time range: ${value?.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })} - ${endTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}`
      );
    }
  };

  const handleEndTimeChange = (value) => {
    setEndTime(value);
    if (startTime) {
      console.log(
        `Time range: ${startTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })} - ${value?.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}`
      );
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <TimeInput
        label="Start time"
        value={startTime}
        onChange={handleStartTimeChange}
        step={15} // 15-minute intervals
        format="24"
        withSeconds={false}
      />
      <TimeInput
        label="End time"
        value={endTime}
        onChange={handleEndTimeChange}
        step={15} // 15-minute intervals
        format="24"
        withSeconds={false}
      />
    </div>
  );
}

export default TimeRangePicker;
