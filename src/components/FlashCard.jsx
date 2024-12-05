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

function FlashCard({ title, imageUrl, description = [], button, color, navigation }) { //en liste a props som genbruges til komponentet
  const router = useRouter(); // useRouter() er en hook som giver adgang til routeren for at navigere mellem sider

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
        {description.length > 0 ? ( // "description.length > 0" tjekker, om description har mindst et element. Hvis ja, rendere listen med <li>-elementer. Hvis nej, returneres null
          description.map((item, index) => ( 
            //"description.map()"" går igennem hvert element i description-arrayet
            //"item" er hvert element i arrayet, som bliver vist som tekst i listen
            <li key={index}>{item}</li> //"<li key={index}>" opretter et listepunkt for hvert element i description
          ))
        ) : null}
      </Text>

      <Button
        color={color || 'blue'}
        fullWidth
        mt="auto"                       
        radius="md"
        onClick={() => router.navigate({ to: navigation })}  
        //"onClick" aktiveres, når brugeren klikker på elementet
        //"router.navigate()" ændrer den aktuelle rute til en ny URL
        //"{ to: navigation }" Angiver destinationen 
      >
        {button}
      </Button>
    </Card>
  );
}

//"propTypes" sikrer, at de data, der sendes til komponenten, er af den rigtige type
FlashCard.propTypes = {
  title: PropTypes.string.isRequired, //title skal være en streng (string), og den er påkrævet (kan ikke være undefined eller null)
  button: PropTypes.string.isRequired, //button skal være en streng (string), og den er også påkrævet
  color: PropTypes.string, //color skal være en streng (string), men den er ikke påkrævet. Det betyder, at den kan være undefined
  navigation: PropTypes.string.isRequired, //navigation skal være en streng (string), og den er påkrævet
  imageUrl: PropTypes.string,  //imageUrl skal være en streng (string), men det er ikke nødvendigt at sende en værdi. Hvis ikke angivet, vil det være undefined
  description: PropTypes.arrayOf(PropTypes.string), //description skal være en array, hvor hvert element i arrayet er en streng (string). Dette er ikke påkrævet, og hvis ikke angivet, vil det være en tom array ([]) som standard
};

export default FlashCard;
