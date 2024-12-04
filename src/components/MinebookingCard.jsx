import { Card, Image, Text, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import BookingModal from './ModalAnnuller';  // First modal component for cancellation
import PropTypes from 'prop-types';
import { getSupabaseClient } from '../supabase/getSupabaseClient';  // Import Supabase client

const supabase = getSupabaseClient()

// Card styling - Billede og indhold aligned side mod side (billede til venstre og tekst til højre) 
const cardStyles = {
  margin: '30px',  
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'flex-start', 
  alignItems: 'left', 
  textAlign: 'left', 
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px', 
  flex: 1, 
  alignItems: 'left', 
  textAlign: 'left', 
};

const titleStyles = {
  marginBottom: '30px', 
  textAlign: 'left', 
  fontWeight: 'bold',
  fontSize: '30px', 
};

function BookingCancelledModal() {
  
}

function MinebookingCard({ booking, onCancel }) {
  const [opened, setOpened] = useState(false);
  const [cancelledOpened, setCancelledOpened] = useState(false);
  const [imageUrl, setImageUrl] = useState(null); // State for room image URL

  // Fallback billede, i tilfælde der ikke er et billede tilgængeligt
  const fallbackImage = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png';

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  const openCancelledModal = () => {
    setOpened(false);
    setCancelledOpened(true);
    onCancel(booking.id); // Sender booking id til knappen for cancelledModal til onCancel prop
  };

  const closeCancelledModal = () => setCancelledOpened(false);

  // Fetch Request til lokaleimage fra Supabase baseret på 'lokalenr' kolonne 
  useEffect(() => {
    if (booking.lokale) {
      fetchRoomImage(booking.lokale); // Fetch Billede URL for lokalet 
    }
  }, [booking.lokale]);

  const fetchRoomImage = async (lokalenr) => {
    try {
      const { data, error } = await supabase
        .from('lokale') // Tabellen i vores Supabase hvor lokaleinfo er lagret 
        .select('lokaleimage') // Henter lokaleimage til lokalet 
        .eq('lokalenr', lokalenr) // matcher med lokalenr fra tabellen
        .single(); //Sikrer at vi får et enkelt resultat eftersom 'lokalenr' forventes at være unik 

      if (error) {
        console.error('Error fetching image:', error.message); //fejlbesked i console hvis der er problemer med at hente billede URL 
        return;
      }

      if (data) {
        setImageUrl(data.lokaleimage); // Sætter billedet fra databasen til lokalet 
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

          <div> {/* her bruges vores insert statement til booking table, som vi passer som en prop fra route til MineBookinger */}
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
