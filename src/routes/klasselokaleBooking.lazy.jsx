import { createLazyFileRoute } from '@tanstack/react-router'
import Header from '../components/header'

export const Route = createLazyFileRoute('/klasselokaleBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Header/>
  </div>
}
