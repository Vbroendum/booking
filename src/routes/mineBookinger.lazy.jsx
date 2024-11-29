import { useEffect, useState } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import MinebookingCard from '../components/MinebookingCard';  // Ensure this component is rendering properly
import Header from '../components/Header';
import Footer from '../components/Footer';

const supabase = getSupabaseClient();

export const Route = createLazyFileRoute('/mineBookinger')({
  component: Minebooking,
});

function Minebooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) {
          console.error('Error fetching user:', userError);
          setError('Error fetching user');
          return;
        }

        if (!user) {
          setError('No user logged in');
          return;
        }

        console.log('Authenticated user:', user.id); // Check the user ID

        const { data, error: bookingsError } = await supabase
          .from('bookings')
          .select('*')
          .eq('user_id', user.id);

        if (bookingsError) {
          setError('Error fetching bookings: ' + bookingsError.message);
        } else if (data && data.length === 0) {
          // If no bookings are found, set the error message
          console.log('Ingen bookninger fundet for denne bruger');
          setError('Ingen bookninger fundet');
        } else {
          setBookings(data); // Store the fetched bookings in state
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
      console.log('Attempting to delete booking with ID:', bookingId); // Log the booking ID

      const { data, error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

      if (error) {
        console.error('Error deleting booking:', error.message);
        setError('Error canceling booking');
        return;
      }

      console.log('Booking successfully canceled:', data); // Log the result of the deletion

      // Update local state to remove the canceled booking from the UI
      setBookings((prevBookings) => prevBookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error('Unexpected error while canceling booking:', error);
      setError('An unexpected error occurred while canceling the booking');
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          fontSize: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <h1>Mine Bookinger</h1>
        {loading && <p>Loading bookings...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Show the error message if there are no bookings */}

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
                booking={booking}
                onCancel={handleCancelBooking}
              />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Minebooking;
