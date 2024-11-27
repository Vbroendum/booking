import { createLazyFileRoute } from '@tanstack/react-router';
import MinebookingCardAfmeld from '../components/MinebookingCardAfmeld';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Route = createLazyFileRoute('/afmeldBookinger')({
  component: MinebookingCardAfmeld,
});

export default function AfmeldBooking() {
  return (
    <div>
      <Header />
      <div style={{ fontSize: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
        <h1>Afmelding af Booking</h1>
        <MinebookingCardAfmeld
          title="Valgt lokale"
          date="15/11 2024"
          time="10:15 - 12:30"
          room="3.3 3. etage"
          people="4"
          buttonText="Afmelding booking"
          cancelPath="/afmeldBookinger"
          imageSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          altText="Room Booking"
        />
      </div>
      <Footer />
    </div>
  );
}
