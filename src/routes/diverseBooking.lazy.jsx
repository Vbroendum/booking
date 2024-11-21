import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/diverseBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /diverseBooking!'
}
