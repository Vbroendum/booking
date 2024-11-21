import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import LokaleForm from '../components/Lokaleform';

export const Route = createLazyFileRoute('/startBooking')({
  component: StartBooking,
})

function StartBooking() {
  const context = useRouteContext({ from: "/startBooking" });
  console.log(context);


  return <div>
    <LokaleForm />
  </div>
}
