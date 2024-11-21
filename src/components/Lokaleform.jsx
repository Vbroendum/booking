import { NumberInput, Button  } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import LokaleInput from './LokaleInput';
import { useState } from 'react';

export default LokaleForm

function LokaleForm() {
    const router = useRouter();
    const [numberOfPeople, setNumberOfPeople] = useState(1);

  return (
    <div>
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
        <LokaleInput numberOfPeople={numberOfPeople} />
        <Button style={{ marginTop: "24px" }} variant="filled" onClick={() => router.navigate({ to: "/frontpage" })}>Log ind</Button>
     </div>
  );
}