import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import PropTypes from 'prop-types';

const stylingCard = {
  margin: '20px',                
  display: 'flex',               
  flexDirection: 'column',       
  justifyContent: 'space-between',
  height: '450px',               
  textAlign: 'left',             
};

function FlashCard({ title, imageUrl, description = [], button, color, navigation }) {
  const router = useRouter();

  // Fallback image in case imageUrl is not provided
  const fallbackImage = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

  return (
    <Card style={stylingCard} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageUrl || fallbackImage}  
          height={250}                      
          width="100%"                      
          alt="Lokale image"
          style={{ objectFit: 'cover' }}    
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

      <Button
        color={color || 'blue'}
        fullWidth
        mt="auto"                       
        radius="md"
        onClick={() => router.navigate({ to: navigation })}  
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
