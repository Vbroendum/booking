import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/klasselokaleBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /klasselokaleBooking!'
}
