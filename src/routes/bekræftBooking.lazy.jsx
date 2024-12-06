import { createLazyFileRoute, useRouter } from '@tanstack/react-router';
import Header from '../components/Header';
import StepperComponent from '../components/Steps';
import { useState, useEffect } from 'react';
import { Group, Button } from '@mantine/core';
import MinebookingCardBekræft from '../components/MinebookingCardBekræft';
import { useRouteContext } from '@tanstack/react-router';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import Footer from '../components/Footer';

const supabase = getSupabaseClient();

export const Route = createLazyFileRoute('/bekræftBooking')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(2);
  const [lokalenr, setLokalenr] = useState(null);
  const [roomImage, setRoomImage] = useState(''); // Used to store the room image

  const context = useRouteContext({ from: '/bekræftBooking' });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const extractedLokalenr = params.get('lokalenr');
    if (extractedLokalenr) {
      setLokalenr(extractedLokalenr);
      fetchRoomImage(extractedLokalenr);
    } else {
      console.error('No lokalenr found in the URL');
    }
  }, []);

  const fetchRoomImage = async (lokalenr) => {
    try {
      const { data, error } = await supabase
        .from('lokale')
        .select('lokaleimage')
        .eq('lokalenr', lokalenr)
        .single();

      if (error) {
        console.error('Error fetching room image:', error.message);
        return;
      }

      if (data) {
        setRoomImage(data.imageURL);
      }
    } catch (error) {
      console.error('Error fetching room image:', error.message);
    }
  };

  const handleBookingConfirmation = async () => {
    try {
      if (!supabase) {
        console.error('Supabase client is not initialized');
        return;
      }

      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.error('Error getting user:', userError.message);
        return;
      }

      if (!user) {
        console.error('No user is logged in');
        return;
      }

      const { data, error } = await supabase
        .from('bookings')
        .insert([{
          start_time: context.startTimeInfo.startTime,
          end_time: context.endTimeInfo.endTime,
          number_of_people: context.numberOfPeopleInfo.numberOfPeople,
          lokale: lokalenr,
          start_date: context.dateInfo.selected,
          user_id: user.id,
          lokaleimage: roomImage,
        }]);

      if (error) {
        console.error('Error inserting booking:', error.message);
      } else {
        console.log('Booking successful:', data);
        router.navigate({ to: '/mineBookinger' });
      }
    } catch (error) {
      console.error('Unexpected error while booking:', error.message);
    }
  };

  const confirmBooking = () => {
    console.log('Confirm booking clicked');
    handleBookingConfirmation();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <Group position="apart" style={{ width: '100%' }}>
          <Button
            variant="light"
            onClick={() => router.navigate({ to: '/startBooking' })}
            style={{ margin: '0 16px', position: 'absolute' }}
          >
            Genstart Booking
          </Button> 

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <StepperComponent activeStep={activeStep} setActiveStep={setActiveStep} />
          </div>
        </Group>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '0 auto', flex: 1 }}>
        <div style={{ width: '50%', maxWidth: '90%' }}>
          <MinebookingCardBekræft
            buttonText={'Bekræft booking'}
            color="blue"
            date={context.setDateInfo}
            lokale={lokalenr}
            time={context.setStartTimeInfo}
            people={context.setNumberOfPeopleInfo}
            imageSrc={roomImage}
            onConfirmBooking={confirmBooking}
          />
        </div>
      </div>

      {/* Fixed footer */}
      <Footer style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 1000,
        padding: '10px 0',
      }} />
    </div>
  );
}

export default RouteComponent;
