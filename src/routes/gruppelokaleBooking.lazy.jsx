import { createLazyFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createLazyFileRoute('/gruppelokaleBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Header />
  </div>
}
