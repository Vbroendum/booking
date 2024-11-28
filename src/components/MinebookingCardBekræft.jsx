// MinebookingCard.jsx
import { Card, Image, Text, Button } from '@mantine/core';
import { useState } from 'react';
import Modal from './BookingBekræftelse';  // First modal component
import BookingCancelledModal from './ModalBekræftelse';  // Second modal component for cancellation confirmation
import PropTypes from 'prop-types'

// Card styling for the main container
const cardStyles = {
  margin: '20px',
  display: 'flex',
  flexDirection: 'row', // Side-by-side layout for the image and content
  alignItems: 'center',
  textAlign: 'left',
  width: '100%',
  padding: '10px',
};

// Content section styling
const contentStyles = {
  display: 'flex',
  flexDirection: 'column', // Stack title, details, and button vertically
  padding: '0 40px',
  flex: '2',
};

// Title section styling
const titleStyles = {
  marginBottom: '20px',
  textAlign: 'center',
};

function MinebookingCardBekræft(props) {
  const [opened, setOpened] = useState(false); // State for the first modal (Booking Confirmation)
  const [cancelledOpened, setCancelledOpened] = useState(false); // State for the second modal (Booking Cancelled)

  // Toggle the first modal
  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  // Function to open the second modal after confirmation
  const openCancelledModal = () => {
    setOpened(false); // Close the first modal
    setCancelledOpened(true); // Open the second modal
  };

  const closeCancelledModal = () => setCancelledOpened(false);

  return (
    <>
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
          <div style={titleStyles}>
            <Text fw={600} size="30px">
              {props.title || 'Valgt Lokale'}
            </Text>
          </div>

          {/* Booking Details */}
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

          {/* Button Section */}
          <div>
            <Modal color="blue" fullWidth radius="md"  onClick={openModal}>
              {props.buttonText || 'Bekræft booking'}
            </Modal>
          </div>
        </div>
      </Card>
      </> 
  );
}

MinebookingCardBekræft.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default MinebookingCardBekræft;
