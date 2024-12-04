import { createLazyFileRoute } from '@tanstack/react-router';
import Header from "../components/Header";
import Footer from '../components/Footer';
import FrontPageFlashCard from '../components/FrontPageFlashCard';

export const Route = createLazyFileRoute('/frontpage')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Ensure the parent takes full height */}
      <Header />
      
      <div
        style={{
          fontSize: "25px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1, // This ensures the content takes available space
          textAlign: 'center', 
        }}
      >
        <h1>Book et lokale eller se dine bookinger.</h1>
        <div style={{ display: 'flex', gap: '150px', justifyContent: "space-evenly" }}>
          <FrontPageFlashCard
            title="Se dine bookinger"
            imageUrl={'https://epgjtuypadrnxeldurle.supabase.co/storage/v1/object/public/lokale-images/gruppelokale.webp?'}
            button="Se booking"
            color="blue"
            navigation="/mineBookinger"
            buttonText='Se booking'
          />
          <FrontPageFlashCard
            title="Book et lokale"
            imageUrl={'https://epgjtuypadrnxeldurle.supabase.co/storage/v1/object/public/lokale-images/gruppelokale.webp'}
            button="Book"
            color="green"
            navigation="/startBooking"
            buttonText='Book'
          />
        </div>
      </div>
      
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
