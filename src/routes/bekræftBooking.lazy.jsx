import { createLazyFileRoute, useRouter } from '@tanstack/react-router';
import Header from '../components/Header';
import StepperComponent from '../components/Steps';
import { useState, useEffect } from 'react';
import { Group, Button } from '@mantine/core';
import MinebookingCardBekræft from '../components/MinebookingCardBekræft';
import { useRouteContext } from '@tanstack/react-router';
import { getSupabaseClient } from '../supabase/getSupabaseClient';

const supabase = getSupabaseClient();

export const Route = createLazyFileRoute('/bekræftBooking')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(2);
  const [lokalenr, setLokalenr] = useState(null);
  const [roomImage, setRoomImage] = useState(''); //brugt til at lagre lokalebillede

  const context = useRouteContext({ from: '/bekræftBooking' });

  // en useEffect som laver en ny URL ud fra vores lokale table i vores database, således at når vi trykker på et lokale fra en tidligere side, f.eks lokale 3.5 laver den i virkeligheden en ny URL som bliver taget ud fra lokalenr kolonne i tabellen
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const extractedLokalenr = params.get('lokalenr');
    if (extractedLokalenr) {
      setLokalenr(extractedLokalenr);
      fetchRoomImage(extractedLokalenr); // henter billede for lokalet
    } else {
      console.error('No lokalenr found in the URL');
    }
  }, []);

  // Henter billede url fra lokalet baseret på lokalenr 
  const fetchRoomImage = async (lokalenr) => {
    try {
      const { data, error } = await supabase
        .from('lokale')
        .select('lokaleimage')  // Vælger det som står i lokaleimage kolonne
        .eq('lokalenr', lokalenr)
        .single(); // vi forventer at der kun er 1 lokale med det lokalenr 
        
      if (error) {
        console.error('Error fetching room image:', error.message);
        return;
      }

      if (data) {
        setRoomImage(data.imageURL); // Lagre det hentede billede
      }
    } catch (error) {
      console.error('Error fetching room image:', error.message);
    }
  };

  const handleBookingConfirmation = async () => {
    try {
      // Sikre at Supabase client er correct startet
      if (!supabase) {
        console.error('Supabase client is not initialized');
        return;
      }

      // Checker om brugeren er logget ind
      const { data: { user }, error: userError } = await supabase.auth.getUser();  // Ny version af supabase, siger vi skal bruge getUser 
      if (userError) {
        console.error('Error getting user:', userError.message);
        return;
      }

      if (!user) {
        console.error('No user is logged in'); // laver en consol meddelelse der siger at brugeren ikke er logget ind
        return;
      }

      // sætter booking data ind i tabellen kaldt bookings med billede fra lokaletabellen
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            start_time: context.startTimeInfo.startTime, //henter start tid fra context som kommer fra startBooking
            end_time: context.endTimeInfo.endTime, //henter slut tid fra context som kommer fra startBooking
            number_of_people: context.numberOfPeopleInfo.numberOfPeople, //henter antal af personer fra context som kommer fra startBooking
            lokale: lokalenr,  // lokalenr koloonne fra tabel
            start_date: context.dateInfo.selected, // Den vaglte dato fra kalender på startBooking
            user_id: user.id,  // indsætter brugeren som er logget ind i tabellen
            lokaleimage: roomImage,  // tilføjer lokalebillede til bookingtabellen, sådan vi kan hente det på mine bookinger
          }
        ]);

      // Handle errors from the insert
      if (error) {
        console.error('Error inserting booking:', error.message);
      } else {
        console.log('Booking successful:', data);
        // Navigate to the user's booking page (or another page of your choice)
        router.navigate({ to: '/mineBookinger' });
      }
    } catch (error) {
      console.error('Unexpected error while booking:', error.message);
    }
  };

  const confirmBooking = () => {
    console.log('Confirm booking clicked');
    handleBookingConfirmation(); // Ensure this gets called
  };

  return (
    <div>
      <Header />

      <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <Group position="apart" style={{ width: '100%' }}>
          {/* Tilbage Button */}
          <Button
            variant="light"
            onClick={() => router.navigate({ to: '/frontpage' })}
            style={{ margin: '0 16px' }}
          >
            Tilbage
          </Button>

          {/* Stepper */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
            <StepperComponent 
              activeStep={activeStep} 
              setActiveStep={setActiveStep} 
            />
          </div>
        </Group>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '0 auto' }}>
        <div style={{ width: '50', maxWidth: '90%' }}>
          <MinebookingCardBekræft
            buttonText={'Bekræft booking'}
            color="blue"
            date={context.setDateInfo}
            lokale={lokalenr}
            time={context.setStartTimeInfo}
            people={context.setNumberOfPeopleInfo}
            imageSrc={roomImage} // Pass the image URL to the card
            onConfirmBooking={confirmBooking}  // Pass the confirmBooking function here
          />
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
