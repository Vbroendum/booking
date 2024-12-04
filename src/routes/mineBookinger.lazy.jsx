import { useEffect, useState } from 'react';
import { createLazyFileRoute, useRouter } from '@tanstack/react-router';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import MinebookingCard from '../components/MinebookingCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@mantine/core';

const supabase = getSupabaseClient();

export const Route = createLazyFileRoute('/mineBookinger')({
  component: Minebooking,
});

function Minebooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => { // henter bookinger fra backenden
    async function fetchBookings() {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser(); // Henter brugeren fra Supabase
        if (userError) {
          console.error('Error fetching user:', userError);
          setError('Error fetching user');
          return;
        }

        if (!user) { // Tjekker om brugeren er logget ind
          setError('No user logged in');
          return;
        }

        console.log('Authenticated user:', user.id); // Checker bruger id

        const { data, error: bookingsError } = await supabase
          .from('bookings')
          .select('*')
          .eq('user_id', user.id);

        if (bookingsError) {
          setError('Error fetching bookings: ' + bookingsError.message);
        } else if (data && data.length === 0) {
          // If no bookings are found, set the error message
          console.log('Ingen bookinger fundet for denne bruger');
          setError('Ingen bookinger fundet');
        } else {
          setBookings(data); // Gemmer de hentede bookinger i state
        }
      } catch (error) {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      console.log('Attempting to delete booking with ID:', bookingId); // Logger booking ID i konsollen

      const { data, error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) {
        console.error('Error deleting booking:', error.message);
        setError('Noget gik galt i afmeldingen ');
        return;
      }

      console.log('Booking successfully canceled:', data); // Logger resultatet af afmeldingen i konsollen

      // Opdaterer local state for at fjerne den aflyste booking fra UI
      setBookings((prevBookings) => prevBookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error('Unexpected error while canceling booking:', error);
      setError('An unexpected error occurred while canceling the booking');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Full viewport height */}
      <Header />
      
      <div
        style={{
          fontSize: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1, // This ensures the content area fills the space available
          textAlign: 'center',
          overflowY: 'auto', // Enable scrolling when content overflows
          paddingBottom: '50px', // Allow space for the footer
        }}
      >
        <h1>Mine Bookinger</h1>
        {loading && <p>Indlæser bookinger...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        {bookings.length === 0 && !loading && !error && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Ingen bookinger fundet</p>
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            justifyItems: 'center',
            margin: '20px',
          }}
        >
          {bookings.length > 0 ? ( 
            bookings.map((booking) => (
              <MinebookingCard
                key={booking.id}
                date={booking.date}
                booking={booking}
                onCancel={handleCancelBooking}
              />
            ))
          ) : (
            <div style={{gridColumn: '2', textAlign: 'center', marginTop: '20px' }}>
              <Button onClick={() => router.navigate({ to: '/startBooking' })}>Start Booking</Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer is now fixed at the bottom */}
      <Footer style={{ 
        position: 'relative', 
        bottom: 0, 
        width: '100%', 
        backgroundColor: 'white', 
        zIndex: 1000 
      }} />
    </div>
  );
}

export default Minebooking;
