import { Card, Image, Text, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouteContext } from '@tanstack/react-router';
import BookingBekræftelse from './BookingBekræftelse';
import { getSupabaseClient } from '../supabase/getSupabaseClient';

const supabase = getSupabaseClient();

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
  const [opened, setOpened] = useState(false); // State for the modal (Booking Confirmation)
  const [imageUrl, setImageUrl] = useState(null); // State to store the image URL

  // Toggle the modal
  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  const context = useRouteContext({ to: "/bekræftBooking" });
  console.log(context);

  // Fetch the room image from Supabase based on the room number (`lokalenr`)
  useEffect(() => {
    if (props.lokale) {
      fetchRoomImage(props.lokale); // Fetch image URL for the room
    }
  }, [props.lokale]);

  // Fetch room image from the Supabase table
  const fetchRoomImage = async (lokalenr) => {
    try {
      const { data, error } = await supabase
        .from('lokale') // The table in Supabase where room info is stored
        .select('lokaleimage') // Fetch the 'lokaleimage' for the room (use correct column name)
        .eq('lokalenr', lokalenr) // Match by room number
        .single(); // Ensure we get a single result (since 'lokalenr' is expected to be unique)

      if (error) {
        console.error('Error fetching image:', error.message);
        return;
      }

      if (data) {
        setImageUrl(data.lokaleimage); // Set the image URL from the database for the room
      }
    } catch (error) {
      console.error('Error fetching room image:', error.message);
    }
  };

  const handleConfirmBooking = () => {
    console.log('Confirming booking...');
    props.onConfirmBooking(); // This calls the handleBookingConfirmation in RouteComponent
    closeModal();
  };

  return (
    <>
      <Card style={cardStyles} shadow="sm" radius="md" withBorder>
        {/* Image Section */}
        <div style={{ flex: '1' }}>
          <Image
            src={imageUrl || props.imageSrc || ''} // Fallback to default if no image is found
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
              <b>Antal personer:</b> {context.numberOfPeopleInfo.numberOfPeople || 'Ikke angivet'}
            </Text>
          </div>

          {/* Button Section */}
          <div>
            <Button color="blue" fullWidth radius="md" onClick={openModal}>
              {props.buttonText || 'Bekræft booking'}
            </Button>
          </div>
        </div>
      </Card>

      <BookingBekræftelse
        opened={opened}
        closeModal={closeModal}
        onConfirm={handleConfirmBooking}
        lokale={props.lokale}
      />
    </>
  );
}

MinebookingCardBekræft.propTypes = {
  imageSrc: PropTypes.string,   // Ensure this prop is a string (URL of the room image)
  altText: PropTypes.string,    // Optional alt text for the image
  title: PropTypes.string,      // Optional title for the room
  lokale: PropTypes.string,     // Room number
  buttonText: PropTypes.string, // Optional button text
  onConfirmBooking: PropTypes.func.isRequired, // Function to confirm booking
};

export default MinebookingCardBekræft;
