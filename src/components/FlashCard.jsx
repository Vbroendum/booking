import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import PropTypes from 'prop-types';

const stylingCard = {
  margin: '30px',    // Adds margin
  display: 'flex',   // Enables flexbox
  flexDirection: 'column', // Aligns content in a column
  justifyContent: 'center', // Centers content vertically
  alignItems: 'left',    // Aligns content to the left
  textAlign: "left",
  width: "30%",
};

// Capitalize the component name
function FlashCard({ title, button, color, navigation }) {
  const router = useRouter();  // Now this is inside a properly named component

  return (
    <Card style={stylingCard} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={200}
          alt="Card image"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size="18px">{title}</Text>
      </Group>

      <Button
        color={color || "blue"}
        fullWidth
        mt="md"
        radius="md"
        onClick={() => router.navigate({ to: navigation })}  // Make sure 'navigation' is passed as a prop
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
};

export default FlashCard; // Now exporting the correctly named component
