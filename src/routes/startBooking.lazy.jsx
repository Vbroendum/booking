import { createLazyFileRoute, useRouteContext } from '@tanstack/react-router'
import { useState } from 'react';

import CustomCalendar from '../components/CustomCalendar';
import LokaleForm from '../components/Lokaleform';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepperComponent from '../components/Steps';


export const Route = createLazyFileRoute('/startBooking')({
  component: StartBooking,
})

function StartBooking() {
  const context = useRouteContext({ from: "/startBooking" });
  console.log(context);

  const [activeStep, setActiveStep] = useState(0);

  const bookingStyle = {
    display: "flex",
    margin: "24px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85vh"
  }


  const steps = [
    {
      label: "Step 1",
    },
    {
      label: "Step 2",
    },
    {
      label: "Step 3",
    },
    {
      label: "Step 4",
    },
  ];

  return (
    <div>
      <Header />
      <StepperComponent steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} style={{ margin: "24px" }}/>
    <div style={bookingStyle}>

    <CustomCalendar style={{ marginLeft: "24px" }} />
    <LokaleForm  />

    </div>
    <Footer />
  </div>
  )
}
