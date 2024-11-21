import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'

import CustomCalendar from '../components/CustomCalendar';
import LokaleForm from '../components/Lokaleform';


export const Route = createLazyFileRoute('/startBooking')({
  component: StartBooking,
})

function StartBooking() {
  const context = useRouteContext({ from: "/startBooking" });
  console.log(context);

  const bookingStyle = {
    display: "flex",
    margin: "24px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh"
  }


  return <div style={bookingStyle}>
    <CustomCalendar />
    <LokaleForm  />
  </div>
}
