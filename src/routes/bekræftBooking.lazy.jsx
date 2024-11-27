import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/bekræftBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /bekræftBooking!'
}
