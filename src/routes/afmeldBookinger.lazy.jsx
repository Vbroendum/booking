import { createLazyFileRoute } from '@tanstack/react-router'
import Afmeldbooking from '../components/AfmeldminebookingCard'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Route = createLazyFileRoute('/afmeldBookinger')({
  component: Afmeldbooking,
})

export default AfmeldBooking;

function AfmeldBooking() {
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
        <h1>Mine bookinger</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '50px',
            justifyContent: 'center',
          }}
        >
          <Afmeldbooking
            title="Valgt lokale"
            date="15/11 2024"
            time="10:15 - 12:30"
            room="3.3 3. etage"
            people="4"
            buttonText="Afmelding booking"
            cancelPath="/afmledBookinger" // Path for cancellation
            imageSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" // Image source
            altText="Room Booking"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

