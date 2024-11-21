import { NumberInput, Select, Button  } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';

export default LokaleForm

function LokaleForm() {
    const router = useRouter();

        

  return (
    <div>
        <NumberInput
            size="md"
            label="Antal personer"
            withAsterisk
            description="Vælg hvor mange personer i skal være i lokalet."
            placeholder="Antal personer i lokalet"
        />
        <Select
            withAsterisk
            withCheckIcon={false}  
            size="md"
            label="Lokale type"
            description="Vælg hvilken type lokale i skal bruge."
            placeholder="Vælg lokale type"
            data={['Diverse', 'Gruppelokale', 'Klasselokale', 'Open learning']}
        />
        <Button style={{ marginTop: "24px" }} variant="filled" onClick={() => router.navigate({ to: "/frontpage" })}>Log ind</Button>
     </div>
  );
}