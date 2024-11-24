import { NumberInput, Button, Group  } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import LokaleInput from './LokaleInput';
import { useState } from 'react';
import BookingAlert from './BookingAlert';
import TimeRangePicker from './TimeInput';

export default LokaleForm

function LokaleForm() {
    const router = useRouter();
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [selectedLokale, setSelectedLokale] = useState(null);
  
    const inputStyle = {
      padding: "0px 24px",
      width: "30%",
    };
  
    const handleNextClick = () => {
      if (!selectedLokale) {
        alert("Vælg venligst et lokale først."); // Prevent navigation if no selection
        return;
      }
  
      // Map lokale names to their corresponding routes
      const routeMap = {
        Gruppelokale: "/gruppeLokaleBooking",
        Klasselokale: "/klasselokaleBooking",
        "Open Learning": "/openLearningBooking",
        Diverse: "/diverseBooking",
      };
  
      const selectedRoute = routeMap[selectedLokale];
      router.navigate({ to: selectedRoute });
    };
  
    return (
      <div style={inputStyle}>
        <NumberInput
          size="md"
          label="Antal personer"
          withAsterisk
          description="Vælg hvor mange personer i skal være i lokalet."
          placeholder="Antal personer i lokalet"
          min={1}
          value={numberOfPeople}
          onChange={(value) => setNumberOfPeople(value)}
        />
        <LokaleInput
          numberOfPeople={numberOfPeople}
          onLokaleSelect={setSelectedLokale} // Pass callback to get selected lokale
        />
        <TimeRangePicker />
        <BookingAlert />
        <Group justify="flex-end" mt="md">
        <Button
          style={{ marginTop: "24px", alignContent: "end" }}
          variant="filled"
          onClick={handleNextClick}
        >
          Næste
        </Button>
        </Group>
      </div>
    );
  }
  