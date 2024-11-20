import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router'; 

export default Demo;

const stylingCard = {
    margin: '30px',    // Adds margin
    display: 'flex',   // Enables flexbox
    flexDirection: 'column', // Aligns content in a column
    justifyContent: 'center', // Centers content vertically
    alignItems: 'left',    // Centers content horizontally
    textAlign: "left",
    width: "30%",
}

function Demo(props) {
  const navigate = useNavigate(); 
  
  const handleNavigate = () => {
    navigate('/frontpage'); 
  };


  return (
    <Card style={stylingCard} shadow="sm" padding="lg" radius="md"  withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={200}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} size='18px'>{props.title}</Text>
      </Group>


      <Button color="blue" fullWidth mt="md" radius="md" onClick={handleNavigate}>
      {props.button}
      </Button>
    </Card>
  );
}

