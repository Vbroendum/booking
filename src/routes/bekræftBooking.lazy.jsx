import { createLazyFileRoute, useRouter } from '@tanstack/react-router';
import Header from '../components/Header';
import StepperComponent from '../components/Steps';
import { useState, useEffect } from 'react';
import { Group, Button } from '@mantine/core';
import MinebookingCardBekræft from '../components/MinebookingCardBekræft';
import { useRouteContext } from '@tanstack/react-router';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import { openModal } from '@mantine/modals';

const supabase = getSupabaseClient();

export const Route = createLazyFileRoute('/bekræftBooking')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(2);
  const [lokalenr, setLokalenr] = useState(null);

  const context = useRouteContext({from: '/bekræftBooking'});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const extractedLokalenr = params.get('lokalenr');
    console.log('Extracted lokalenr:', extractedLokalenr); // Log to confirm
    if (extractedLokalenr) {
      setLokalenr(extractedLokalenr);
    } else {
      console.error('No lokalenr found in the URL');
    }
  }, []);

  const handleBookingConfirmation = async () => {
    try {
      // Ensure that Supabase client is correctly initialized
      if (!supabase) {
        console.error('Supabase client is not initialized');
        return;
      }

      // Check if user is logged in (with the new method)
      const { data: { user }, error: userError } = await supabase.auth.getUser();  // Correct method for v2.x.x
      if (userError) {
        console.error('Error getting user:', userError.message);
        return;
      }

      if (!user) {
        console.error('No user is logged in');
        return;
      }

      console.log('User ID:', user.id); // Log user ID for debugging

      // Insert booking data into Supabase
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            start_time: context.startTimeInfo.startTime,
            end_time: context.endTimeInfo.endTime,
            number_of_people: context.numberOfPeopleInfo.numberOfPeople,
            lokale: lokalenr,  // Room number from URL
            start_date: context.dateInfo.selected,
            user_id: user.id,  // Insert the logged-in user's ID
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
            onClick={() => router.navigate({to: '/frontpage'})}
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
            onConfirmBooking={confirmBooking}  // Pass the confirmBooking function here
          />
        </div>
      </div>
    </div>
    
  );
}

export default RouteComponent;
