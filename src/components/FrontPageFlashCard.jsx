import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import PropTypes from 'prop-types';

// Card styling
const stylingCard = {
  margin: '20px',                // Adds margin
  display: 'flex',               // Enables flexbox
  flexDirection: 'column',       // Aligns content in a column
  justifyContent: 'space-between',// Ensures content is spaced out (button at the bottom)
  height: '370px',               // Set a fixed height for the card to ensure consistency
  textAlign: 'left',             // Aligns text to the left
};

// Frontpage FlashCard Component
function FrontPageFlashCard({ title, imageUrl, description, buttonText, color, navigation }) {
  const router = useRouter();

  // Fallback image in case imageUrl is not provided
  const fallbackImage = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

  return (
    <Card style={stylingCard} shadow="sm" padding="lg" radius="md" withBorder>
      {/* Card Image Section */}
      <Card.Section>
        <Image
          src={imageUrl || fallbackImage}  // Use the fallback if imageUrl is missing
          height={250}                      // Set a fixed height for the image
          width="100%"                      // Ensure it stretches to fill the container's width
          alt="Lokale image"
          style={{ objectFit: 'cover' }}    // Ensures the image covers the area without distortion
        />
      </Card.Section>

      {/* Card Content Section */}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="18px">
          {title}
        </Text>
      </Group>

      <Text size="sm" mb="md" c="dimmed">
        {description}
      </Text>

      {/* Button Section */}
      <Button
  color={color || 'blue'}
  fullWidth
  mt="auto"
  radius="md"
  onClick={() => router.navigate({ to: navigation })}
  styles={{
    root: {
      color: 'white',  // Makes the text black
    }
  }}
>
  {buttonText}
</Button>

    </Card>
  );
}

// Prop validation to ensure correct data types are passed
FrontPageFlashCard.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.string,
  navigation: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,  // Ensure imageUrl is passed correctly

};

export default FrontPageFlashCard;
