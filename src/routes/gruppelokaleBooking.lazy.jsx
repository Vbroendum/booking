import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gruppelokaleBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /gruppelokaleBooking!'
}
