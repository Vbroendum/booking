import { Card, Image, Text, Button } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

// Card styling for the main container
const cardStyles = {
  margin: '20px',
  display: 'flex',
  flexDirection: "row" , // Side-by-side layout for the image and content
  alignItems: 'center',
  textAlign: 'left',
  maxWidth: '50%',
  padding: '10px',
};

// Content section styling
const contentStyles = {
  display: 'flex',
  flexDirection: 'column', // Stack title, details, and button vertically
  padding: '0 40px',
  flex: '2',
};

// Title section styling
const titleStyles = {
  marginBottom: '20px',
  textAlign: 'center',
};

function afmeldBooking (props) {
  const navigate = useNavigate();

  // Handle navigation on button click
  const handleCancelBooking = () => {
    navigate(props.cancelPath || '/afmeldBooking');
  };

  return (
    <Card style={cardStyles} shadow="sm" radius="md" withBorder>
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
      <div style={contentStyles}>
        {/* Title (Separate Div) */}
        <div style={titleStyles}>
          <Text fw={600} size="30px ">
            {props.title || 'Valgt Lokale'}
          </Text>
        </div>

        {/* Booking Details (Separate Div) */}
        <div>
          <Text size="sm" c="dimmed" mb="sm">
            <b>Dato:</b> {props.date || 'Ikke angivet'}
          </Text>
          <Text size="sm" c="dimmed" mb="sm">
            <b>Tidspunkt:</b> {props.time || 'Ikke angivet'}
          </Text>
          <Text size="sm" c="dimmed" mb="sm">
            <b>Lokale:</b> {props.room || 'Ikke angivet'}
          </Text>
          <Text size="sm" c="dimmed" mb="lg">
            <b>Antal personer:</b> {props.people || 'Ikke angivet'}
          </Text>
        </div>

        {/* Button Section (Separate Div) */}
        <div>
          <Button color="red" fullWidth radius="md" onClick={handleCancelBooking}>
            {props.buttonText || 'Bekræft afmelding af booking'}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default afmeldBooking;
