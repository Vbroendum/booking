import React, { useState } from 'react';
import { Modal, Text, Group, Button, Title, Stack } from '@mantine/core';
import { Link } from '@tanstack/react-router';

function BookingBekræftelse() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* Button to open the modal */}
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>

      {/* Modal content */}
      <Modal
  opened={opened}
  onClose={() => setOpened(false)}
  centered
  size="55rem"
  title={<Text style={{ fontWeight: '600' }}>Bekræftelse af booket lokale</Text>}
>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
    {/* Left Column */}
    <Stack>
        <Text>Vi kan nu bekræfte at dit ønskede lokale er reseveret og booket til dig, god fornøjelse!</Text>
        <Text>På undersiden “Mine Bookinger er der muligt at se din booking af lokale.</Text>
    </Stack>
    
    

    {/* Right Column */}
    <div style={{justifyContent: 'flex-end'}}>
    <Stack>
        <Title>Detaljer</Title>
        <Text>
            <strong>Dato:</strong> 12.12.2021
        </Text>
        <Text>
            <strong>Tidspunkt:</strong> 12:00 - 14:00
        </Text>
        <Text>
            <strong>Lokale:</strong> 3.3, 3. etage
        </Text>
        <Text>
            <strong>Antal personer:</strong> 4
        </Text>
        <Text>
            <strong>Booket af:</strong> Underviser
        </Text>
    </Stack>
    
    </div>

    <Button><Link to="/mineBookinger" style={{textDecoration: 'none', color: 'white'}}>Mine bookinger</Link></Button>
    
  </div>
</Modal>

    </>
  );
}

export default BookingBekræftelse;
