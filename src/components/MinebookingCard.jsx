import { Card, Image, Text, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import BookingModal from './ModalAnnuller';  // First modal component for cancellation
import PropTypes from 'prop-types';
import { getSupabaseClient } from '../supabase/getSupabaseClient';  // Import Supabase client

const supabase = getSupabaseClient()

// Card styling - image and content aligned side by side (image left, text right)
const cardStyles = {
  margin: '30px',  // Adds margin
  display: 'flex', // Enables flexbox
  flexDirection: 'row', // Aligns content in a row (image left, content right)
  justifyContent: 'flex-start', // Aligns content to the left
  alignItems: 'left', // Ensures proper vertical alignment
  textAlign: 'left', // Centers content within the flex box
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px', // Padding for the content area
  flex: 1, // Content area takes up most of the space
  alignItems: 'left', // Centers the content horizontally
  textAlign: 'left', // Ensures text is centered in the content area
};

const titleStyles = {
  marginBottom: '30px', // Added space below the title
  textAlign: 'left', // Centers the title
  fontWeight: 'bold',
  fontSize: '30px', // Larger title font size
};

function BookingCancelledModal() {
  // You can implement this modal later if needed
}

function MinebookingCard({ booking, onCancel }) {
  const [opened, setOpened] = useState(false);
  const [cancelledOpened, setCancelledOpened] = useState(false);
  const [imageUrl, setImageUrl] = useState(null); // State for room image URL

  // Fallback image in case no image is provided
  const fallbackImage = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  const openCancelledModal = () => {
    setOpened(false);
    setCancelledOpened(true);
    console.log('Canceling booking with ID:', booking.id); // Log the booking ID
    onCancel(booking.id); // Pass the booking ID to onCancel
  };

  const closeCancelledModal = () => setCancelledOpened(false);

  // Fetch room image from Supabase based on room number (`lokalenr`)
  useEffect(() => {
    if (booking.lokale) {
      fetchRoomImage(booking.lokale); // Fetch image URL for the room
    }
  }, [booking.lokale]);

  const fetchRoomImage = async (lokalenr) => {
    try {
      const { data, error } = await supabase
        .from('lokale') // The table in Supabase where room info is stored
        .select('lokaleimage') // Fetch the 'lokaleimage' for the room
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

  return (
    <>
      <Card style={cardStyles} shadow="sm" padding="lg" radius="md" withBorder>
        {/* Image Section */}
        <div style={{ flex: '1' }}>
          <Image
            src={imageUrl || booking.image_url || fallbackImage}
            height={250}
            fit="cover"
            alt={booking.lokale || 'Selected Room'}
          />
        </div>

        {/* Content Section */}
        <div style={contentStyles}>
          <div style={titleStyles}>
            <Text fw={600} size="30px">{'Valgt Lokale'}</Text>
          </div>

          <div>
            <Text size="sm" c="dimmed" mb="sm"><b>Dato:</b> {booking.start_date || 'Ikke angivet'}</Text>
            <Text size="sm" c="dimmed" mb="sm"><b>Tidspunkt:</b> {booking.start_time || 'Ikke angivet'} - {booking.end_time || 'Ikke angivet'}</Text>
            <Text size="sm" c="dimmed" mb="sm"><b>Lokale:</b> {booking.lokale || 'Ikke angivet'}</Text>
            <Text size="sm" c="dimmed" mb="lg"><b>Antal personer:</b> {booking.number_of_people || 'Ikke angivet'}</Text>
          </div>

          <Button
            color="red"
            fullWidth
            mt="md"
            radius="md"
            onClick={openModal}
          >
            Afmeld booking
          </Button>
        </div>
      </Card>

      {/* Cancellation modal */}
      <BookingModal
        opened={opened}
        onClose={closeModal}
        onConfirm={openCancelledModal}
        title="Er du sikker på, at du vil annullere din booking?"
        bodyContent="Du skal bestille en ny tid, hvis du ombestemmer dig"
      />

      {/* Confirmation modal */}
      <BookingCancelledModal opened={cancelledOpened} onClose={closeCancelledModal} />
    </>
  );
}

MinebookingCard.propTypes = {
  booking: PropTypes.object.isRequired,  // Pass the whole booking object
  onCancel: PropTypes.func.isRequired,   // Function to handle booking cancellation
};

export default MinebookingCard;
