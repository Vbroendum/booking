import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/startBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /startBooking!'
}
