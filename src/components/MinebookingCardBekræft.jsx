import { Card, Image, Text, Button } from '@mantine/core';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouteContext } from '@tanstack/react-router';
import BookingBekræftelse from './BookingBekræftelse';
import { getSupabaseClient } from '../supabase/getSupabaseClient';

const supabase = getSupabaseClient();

// Styling af card for hovedcontaineren
const cardStyles = {
  margin: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'left',
  width: '100%',
  padding: '10px',
};

// Content sektion styling
const contentStyles = {
  display: 'flex',
  flexDirection: 'column', // Orienterer title, details, og button vertikalt
  padding: '0 40px',
  flex: '2',
};

// Title sektion styling
const titleStyles = {
  marginBottom: '20px',
  textAlign: 'center',
};

function MinebookingCardBekræft(props) {
  const [opened, setOpened] = useState(false); // Håndterer state for modalalen (Booking Confirmation)
  const [imageUrl, setImageUrl] = useState(null); // State for at gemme image URL

  // Toggle for modalen
  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);

  const context = useRouteContext({ to: "/bekræftBooking" });
  console.log(context);

  // Henter billedet for det valgte lokale fra Supabase baseret på lokale nummeret (`lokalenr`)
  useEffect(() => {
    if (props.lokale) {
      fetchRoomImage(props.lokale); // Henter billedet for det valgte lokale
    }
  }, [props.lokale]);

  // Henter lokalets billede fra supabase tabellen
  const fetchRoomImage = async (lokalenr) => {
    try {
      const { data, error } = await supabase
        .from('lokale') // Tabellen i Supabase hvor værelses informationen er gemt
        .select('lokaleimage') // Henter 'lokaleimage' for lokalet
        .eq('lokalenr', lokalenr) // Matcher med værelsesnummeret
        .single(); // Sikrer at vi får et enkelt resultat tilbage (da 'lokalenr' forventes at være unik)

      if (error) {
        console.error('Error fetching image:', error.message);
        return;
      }

      if (data) {
        setImageUrl(data.lokaleimage); // Sætter image URL fra databasen for lokalet
      }
    } catch (error) {
      console.error('Error fetching room image:', error.message);
    }
  };

  const handleConfirmBooking = () => {
    console.log('Confirming booking...');
    props.onConfirmBooking(); // Kalder på handleBookingConfirmation i RouteComponent
    closeModal();
  };

  return (
    <>
      <Card style={cardStyles} shadow="sm" radius="md" withBorder>
        {/* Image sektion */}
        <div style={{ flex: '1' }}>
          <Image
            src={imageUrl || props.imageSrc || ''} // Falder tilbage til default hvis billedet ikke kan findes
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

          {/* Booking detaljer */}
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

          {/* Button sektion */}
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
  imageSrc: PropTypes.string,   // Sikrer at denne prop er en string (URL til billedet af lokalet)
  altText: PropTypes.string,    // Alternativ valgfri text for billedet
  title: PropTypes.string,      // Valgfri titel for lokalet
  lokale: PropTypes.string,     // Værelsesnummer
  buttonText: PropTypes.string, // Valgfri text til knappen
  onConfirmBooking: PropTypes.func.isRequired, // Funktion for at bekræfte booking
};

export default MinebookingCardBekræft;
