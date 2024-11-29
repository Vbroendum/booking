import { useState } from 'react';
import { Modal, Text, Group, Button, Title, Stack } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import CalendarIcon from '/public/assets/calendar.svg';
import ClockIcon from '/public/assets/clock.svg';
import LocationIcon from '/public/assets/home.svg';
import UserIcon from '/public/assets/user.svg';
import GitIcon from '/public/assets/git-pull.svg';
import { useRouteContext } from '@tanstack/react-router';


function BookingBekræftelse( { lokale }, props) {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  const context = useRouteContext({to: "/bekræftBooking"})
  console.log(context)

  console.log('Received lokale:', lokale);
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
            <strong>Dato:</strong> {context.dateInfo.selected.toString()}
        </Text>
        <Text>
            <img src={ClockIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Tidspunkt:</strong> {context.startTimeInfo.startTime} - {context.endTimeInfo.endTime}
        </Text>
        <Text>
            <img src={LocationIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Lokale: </strong> {props.lokalenr || 'ikke angivet'}
        </Text>
        <Text>
            <img src={UserIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>{context.numberOfPeopleInfo.numberOfPeople}</strong> 
        </Text>
        <Text>
            <img src={GitIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Booket af:</strong> 
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
