import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/openlearningBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /openlearningBooking!'
}
