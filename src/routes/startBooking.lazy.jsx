import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'

import CustomCalendar from '../components/CustomCalendar';
import LokaleForm from '../components/Lokaleform';
import Header from '../components/Header';
import Footer from '../components/Footer';


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
    height: "85vh"
  }


  return (
    <div>
      <Header />

    <div style={bookingStyle}>

    <CustomCalendar style={{ marginLeft: "24px" }} />
    <LokaleForm  />

    </div>
    <Footer />
  </div>
  )
}
