/* eslint-disable react/prop-types */
import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import PropTypes from 'prop-types';

const stylingCard = {
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '370px',
  textAlign: 'left',
  maxWidth: '333px',
};

function FrontPageFlashCard({ title, imageUrl, description, buttonText, color, navigation }) {
  const router = useRouter();

  // Standardbillede, hvis imageUrl ikke er angivet
  const fallbackImage = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

  return (
    <Card style={stylingCard} shadow="sm" padding="lg" radius="md" withBorder>
      {/* Billede-sektion */}
      <Card.Section>
        <Image
          src={imageUrl || fallbackImage}
          height={250}
          width="100%"
          alt="Lokale billede"
          style={{ objectFit: 'cover' }}
        />
      </Card.Section>

      {/* Indhold-sektion */}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="18px">
          {title}
        </Text>
      </Group>

      <Text size="sm" mb="md" c="dimmed">
        {description}
      </Text>

      {/* Knap-sektion */}
      <Button
        color={color || 'blue'}
        fullWidth
        mt="auto"
        radius="md"
        onClick={() => router.navigate({ to: navigation })}
        styles={{
          root: {
            color: 'white',
          },
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
}

// Prop-types for validering af data
FrontPageFlashCard.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.string,
  navigation: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default FrontPageFlashCard;
