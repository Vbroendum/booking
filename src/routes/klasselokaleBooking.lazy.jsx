import { createLazyFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createLazyFileRoute('/klasselokaleBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Header/>
  </div>
}
