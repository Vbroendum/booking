import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import PropTypes from 'prop-types';

const stylingCard = {
  margin: '20px',                // Adds margin
  display: 'flex',               // Enables flexbox
  flexDirection: 'column',       // Aligns content in a column
  justifyContent: 'space-between',// Ensures content is spaced out (button at the bottom)
  height: '450px',               // Set a fixed height for the card to ensure consistency
  textAlign: 'left',             // Aligns text to the left
};

function FlashCard({ title, imageUrl, description = [], button, color, navigation }) {
  const router = useRouter();

  // Fallback image in case imageUrl is not provided
  const fallbackImage = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

  return (
    <Card style={stylingCard} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageUrl || fallbackImage}  // Use the fallback if imageUrl is missing
          height={250}                      // Set a fixed height for the image
          width="100%"                      // Ensure it stretches to fill the container's width
          alt="Lokale image"
          style={{ objectFit: 'cover' }}    // Ensures the image covers the area without distortion
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="18px">{title}</Text>
      </Group>

      <Text size="sm" mb="md">
        {description.length > 0 ? (
          description.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : null}
      </Text>

      {/* Button is always positioned at the bottom of the card */}
      <Button
        color={color || 'blue'}
        fullWidth
        mt="auto"                       // Pushes the button to the bottom of the card
        radius="md"
        onClick={() => router.navigate({ to: navigation })}  // Ensure navigation path is valid
      >
        {button}
      </Button>
    </Card>
  );
}

// Prop validation to make sure correct data types are passed
FlashCard.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  color: PropTypes.string,
  navigation: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,  // Ensure imageUrl is passed correctly
  description: PropTypes.arrayOf(PropTypes.string),  // Array of strings for description
};

export default FlashCard;
