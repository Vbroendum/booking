import { createLazyFileRoute } from '@tanstack/react-router'
import Header from '../components/header'

export const Route = createLazyFileRoute('/diverseBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Header />
  </div>
}
