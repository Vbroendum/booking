/* eslint-disable react/prop-types */
import { NumberInput, Button, Group  } from '@mantine/core';
import LokaleInput from './LokaleInput';
import { useState, useEffect } from 'react';
import BookingAlert from './BookingAlert';
import TimeSelect from './TimeSelect';
import { useRouteContext } from '@tanstack/react-router';

// Vi har lifted state i den her component som ligger i startBooking.lazy.jsx, fordi vi skal bruge flere elementer fra denne component 
// som vi så derfor passer som props fra route til denne component
// 
export default function LokaleForm({ setSelectedLokale, setSelectedStartTime, setSelectedEndTime, handleNavigate}) {
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const context = useRouteContext({from : "/startBooking"})

    const inputStyle = {
      padding: "0px 24px",
      width: "30%",
    };

    // grunden til vi har sat useEffect på contexten er grundet konsollen i vores browser gav os et "Bad useState usage" og ved at bruger useEffect som loader contexten efter siden er loaded er DOM'en glad
    useEffect(() => {
      // Opdatere context når numberOfPeople ændres 
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
          onClick={handleNavigate} {/* en prop vi passer fra route som styrer, hvor vi bliver sendt hen, da vi skal sendes til 4 forskellige sider */}
        >
          Næste
        </Button>
        </Group>
        </div>
    );
  }
