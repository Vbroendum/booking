import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/klasse')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /klasse!'
}
