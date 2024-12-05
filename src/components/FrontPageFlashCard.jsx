/* eslint-disable react/prop-types */
import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import PropTypes from 'prop-types';

const stylingCard = {
<<<<<<< Updated upstream
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '370px',
  textAlign: 'left',
  maxWidth: '333px',
=======
  margin: '20px',                
  display: 'flex',               
  flexDirection: 'column',       
  justifyContent: 'space-between',
  height: '370px',               
  textAlign: 'left',             
  maxWidth: '333px',             
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          src={imageUrl || fallbackImage}
          height={250}
          width="100%"
          alt="Lokale billede"
          style={{ objectFit: 'cover' }}
=======
          src={imageUrl || fallbackImage}  
          height={250}                     
          width="100%"                     
          alt="Lokale image"
          style={{ objectFit: 'cover' }}    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
  color={color || 'blue'}
  fullWidth
  mt="auto"
  radius="md"
  onClick={() => router.navigate({ to: navigation })} //kig i flashcard.jsx kommentarer
  styles={{
    root: {
      color: 'white',  
    }
  }}
>
  {buttonText}
</Button>

>>>>>>> Stashed changes
    </Card>
  );
}

<<<<<<< Updated upstream
// Prop-types for validering af data
=======
// samme propTypes som i flashcard.jsx
>>>>>>> Stashed changes
FrontPageFlashCard.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.string,
  navigation: PropTypes.string.isRequired,
<<<<<<< Updated upstream
  imageUrl: PropTypes.string,
=======
  imageUrl: PropTypes.string,  

>>>>>>> Stashed changes
};

export default FrontPageFlashCard;
