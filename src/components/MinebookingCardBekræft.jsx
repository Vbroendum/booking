import { Card, Image, Text, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useRouteContext } from '@tanstack/react-router';
import  BookingBekraeftelse  from './BookingBekræftelse';

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
  // Toggle the first modal
  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);


  const context = useRouteContext({to: "/bekræftBooking"})
  console.log(context)

  const handleConfirmBooking = () => {
    console.log('Confirming booking...');
    // Ensure this function is called correctly
    props.onConfirmBooking(); // This calls the handleBookingConfirmation in RouteComponent
    closeModal();
  };

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
              <b>Dato:</b> {context.dateInfo.selected.toString() || 'Ikke angivet'}
            </Text>
            <Text size="sm" c="dimmed" mb="sm">
              <b>Tidspunkt:</b> {context.startTimeInfo.startTime || 'Ikke angivet'} - {context.endTimeInfo.endTime}
            </Text>
            <Text size="sm" c="dimmed" mb="sm">
              <b>Lokale:</b> {props.lokale}
            </Text>
            <Text size="sm" c="dimmed" mb="lg">
              <b>Antal personer:</b> {context.numberOfPeopleInfo.numberOfPeople|| 'Ikke angivet'}
            </Text>
          </div>

          {/* Button Section */}
          <div>
            <Button color="blue" fullWidth radius="md"  onClick={openModal}>
              {props.buttonText || 'Bekræft booking'}
            </Button>
          </div>
        </div>
      </Card>
      <BookingBekraeftelse
        opened={opened}
        closeModal={closeModal}
        onConfirm={handleConfirmBooking}
        lokale={props.lokale}
      />
      </> 
  )};

export default MinebookingCardBekræft;
