// Import necessary libraries
import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

// Card styling
const cardStyles = {
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  textAlign: 'left',
};

// FlashCard component
function Demo(props) {
  const navigate = useNavigate();

  // Handle navigation on button click
  const handleNavigate = () => {
    navigate('/frontpage');
  };

  return (
    <Card style={cardStyles} shadow="sm" padding="lg" radius="md" withBorder>
      {/* Card Image Section */}
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={200}
          alt="Norway"
        />
      </Card.Section>

      {/* Card Content Section */}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="18px">
          {props.title}
        </Text>
      </Group>

      <Text size="sm" c="dimmed">
        {props.description}
      </Text>

      {/* Button Section */}
      <Button color="blue" fullWidth mt="md" radius="md" onClick={handleNavigate}>
        Vælg
      </Button>
    </Card>
  );
}

export default Demo;
