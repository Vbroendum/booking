import { Card, Image, Text, Button } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

function MinebookingCardAfmeld(props) {
  const navigate = useNavigate();

  // Handle navigation on button click
  const handleCancelBooking = () => {
    navigate(props.cancelPath || '/afmeldBookinger');
  };

  return (
    <Card style={{ margin: '20px', display: 'flex', flexDirection: 'row', maxWidth: '50%' }} shadow="sm" radius="md" withBorder>
      {/* Image Section */}
      <div style={{ flex: '1' }}>
        <Image
          src={props.imageSrc || 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'}
          height={300}
          fit="cover"
          alt={props.altText || 'Selected Room'}
        />
      </div>

      {/* Content Section */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '30px 40px', flex: '2' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Text fw={600} size="30px">
            {props.title || 'Valgt Lokale'}
          </Text>
        </div>

        <div>
          <Text size="sm" c="dimmed" mb="sm"><b>Dato:</b> {props.date || 'Ikke angivet'}</Text>
          <Text size="sm" c="dimmed" mb="sm"><b>Tidspunkt:</b> {props.time || 'Ikke angivet'}</Text>
          <Text size="sm" c="dimmed" mb="sm"><b>Lokale:</b> {props.room || 'Ikke angivet'}</Text>
          <Text size="sm" c="dimmed" mb="lg"><b>Antal personer:</b> {props.people || 'Ikke angivet'}</Text>
        </div>

        <div>
          <Button color="red" fullWidth radius="md" onClick={handleCancelBooking}>
            {props.buttonText || 'Bekræft afmelding af booking'}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default MinebookingCardAfmeld;
