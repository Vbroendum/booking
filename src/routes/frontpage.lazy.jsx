import { createLazyFileRoute } from '@tanstack/react-router'
import FlashCard from "../components/FlashCard"

export const Route = createLazyFileRoute('/frontpage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div
  style={{
    fontSize: "25px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center', // Align text in the center of the h1
  }}
>
  <h1>Book et lokale eller se dine bookinger.</h1>
  <div style={{display: 'flex', gap: '150px', justifyContent: "space-evenly"}}>
  <FlashCard
          title="Se dine bookinger"
          button="Se booking"
          color="blue"
          navigation="/about"
        />

        {/* Second FlashCard */}
        <FlashCard
          title="Book et lokale"
          button="Book"
          color="green"
          navigation="/startBooking.lazy.jsx"
          />
  </div>
</div>
}

