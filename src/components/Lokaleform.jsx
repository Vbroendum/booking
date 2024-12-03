/* eslint-disable react/prop-types */
import { NumberInput, Button, Group  } from '@mantine/core';
import LokaleInput from './LokaleInput';
import { useState, useEffect } from 'react';
import BookingAlert from './BookingAlert';
import TimeSelect from './TimeSelect';
import { useRouteContext } from '@tanstack/react-router';

export default function LokaleForm({ setSelectedLokale, setSelectedStartTime, setSelectedEndTime, handleNavigate}) {
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const context = useRouteContext({from : "/startBooking"})

    const inputStyle = {
      padding: "0px 24px",
      width: "30%",
    };

    console.log('antal personer', numberOfPeople)

    useEffect(() => {
      // Update context when numberOfPeople changes
      context.setNumberOfPeopleInfo({ numberOfPeople });
    }, [numberOfPeople, context]);
    return (
      <div style={inputStyle}>
        <NumberInput
          size="md"
          label="Antal personer"
          withAsterisk
          description="Vælg hvor mange personer i skal være i lokalet."
          placeholder="Antal personer i lokalet"
          min={1}
          max={99}
          clampBehavior="strict"
          value={numberOfPeople}
          onChange={(value) => setNumberOfPeople(value)}
        />
        <LokaleInput
          numberOfPeople={numberOfPeople}
          onLokaleSelect={setSelectedLokale} // Pass callback to get selected lokale
        />
        <TimeSelect
        setSelectedStartTime={setSelectedStartTime}
        setSelectedEndTime={setSelectedEndTime} 
        />
        <BookingAlert />
        <Group justify="flex-end" mt="md">
        <Button
          style={{ marginTop: "24px", alignContent: "end" }}
          variant="filled"
          onClick={handleNavigate}
        >
          Næste
        </Button>
        </Group>
        </div>
    );
  }
