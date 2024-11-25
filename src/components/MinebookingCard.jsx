import { Card, Image, Text, Button } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

// Card styling for the main container
const cardStyles = {
  margin: '20px',
  display: 'flex',
  flexDirection: 'row', // Side-by-side layout for the image and content
  alignItems: 'center',
  textAlign: 'left',
  width: '100%',
  padding: '20px',
};

// Card styling for the content section
const contentStyles = {
  display: 'flex',
  flexDirection: 'column', // Stack title, details, and button vertically
  padding: '0 20px',
  flex: '2', // Flex size to control layout proportions
};

function MinebookingCard(props) {
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
        {/* Title */}
        <Text fw={600} size="20px" mb="md" textAlign="center">
          {props.title || 'Valgt Lokale'}
        </Text>

        {/* Details */}
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

        {/* Button */}
        <Button color="red" fullWidth radius="md" onClick={handleCancelBooking}>
          {props.buttonText || 'Afmelding booking'}
        </Button>
      </div>
    </Card>
  );
}

export default MinebookingCard;
