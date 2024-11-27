import { createLazyFileRoute } from '@tanstack/react-router'
import MinebookingCard from '../components/MinebookingCard'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Route = createLazyFileRoute('/mineBookinger')({
  component: Minebooking,
})

function Minebooking() {
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
          <MinebookingCard
            title="Valgt lokale"
            date="15/11 2024"
            time="10:15 - 12:30"
            room="3.3 3. etage"
            people="4"
            buttonText="Afmeld booking"
            imageSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" // Image source
            altText="Room Booking"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Minebooking