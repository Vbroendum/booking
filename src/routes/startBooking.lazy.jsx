import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/startBooking')({
  component: StartBooking,
})

function StartBooking() {
  const context = useRouteContext({ from: "/startBooking" });
  console.log(context);


  return <div>Hello /startBooking!</div>
}
