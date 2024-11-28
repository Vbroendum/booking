import { NumberInput, Button, Group  } from '@mantine/core';
import LokaleInput from './LokaleInput';
import { useState } from 'react';
import BookingAlert from './BookingAlert';
import TimeSelect from './timeSelect';
import { useRouteContext } from '@tanstack/react-router';

export default function LokaleForm({ setSelectedLokale, handleNavigate}) {
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const context = useRouteContext({from : "/startBooking"})

    const inputStyle = {
      padding: "0px 24px",
      width: "30%",
    };

    console.log('antal personer', numberOfPeople)

  const numberOfPeopleInfo = {
    numberOfPeople
  }


    context.setNumberOfPeopleInfo(numberOfPeopleInfo)
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
        <TimeSelect />
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
  