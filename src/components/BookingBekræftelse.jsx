import React, { useState } from 'react';
import { Modal, Text, Group, Button, Title, Stack } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import CalendarIcon from '../assets/calendar.svg';
import ClockIcon from '../assets/clock.svg';
import LocationIcon from '../assets/home.svg';
import UserIcon from '../assets/user.svg';
import GitIcon from '../assets/git-pull.svg';

function BookingBekræftelse() {
  const [opened, setOpened] = useState(false);
  const router = useRouter();




  return (
    <>
      {/* Button to open the modal */}
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Bekræft</Button>
      </Group>

      {/* Modal content */}
      <Modal
  opened={opened}
  onClose={() => setOpened(false)}
  centered
  size="55rem"
  radius={15}
  title={<Text style={{ fontWeight: '600', position: 'absolute', left: '40%', top: '30%' }}>Bekræftelse af booket lokale</Text>}
>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
    {/* Left Column */}
    <Stack>
        <Text style={{marginTop: '50px', marginLeft: '20px'}}>Vi kan nu bekræfte at dit ønskede lokale er reserveret og booket til dig, god fornøjelse!</Text>
        <Text style={{marginLeft: '20px'}}>På undersiden “Mine Bookinger er der muligt at se din booking af lokale.</Text>
    </Stack>
    
    

    {/* Right Column */}
    <div style={{justifyContent: 'flex-end'}}>
    <Stack>
        <Title style={{marginLeft: '106px', fontWeight: '500', fontSize: '24px'}}>Detaljer:</Title>
        <Text>
            <img src={CalendarIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Dato:</strong> 12.12.2021
        </Text>
        <Text>
            <img src={ClockIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Tidspunkt:</strong> 12:00 - 14:00
        </Text>
        <Text>
            <img src={LocationIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Lokale:</strong> 3.3, 3. etage
        </Text>
        <Text>
            <img src={UserIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Antal personer:</strong> 4
        </Text>
        <Text>
            <img src={GitIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Booket af:</strong> Underviser
        </Text>
    </Stack>
    
    </div>
  </div>
  <Button 
    style={{marginLeft: '20px', marginBottom: '20px'}}
    onClick={() => router.navigate ({to: '/Minebookinger'})}>
      Mine bookinger
    </Button>
</Modal>

    </>
  );
}

export default BookingBekræftelse;
