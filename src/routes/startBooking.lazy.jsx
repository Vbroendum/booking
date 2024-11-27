import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
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
  const router = useRouter()
  const [selectedLokale, setSelectedLokale] = useState(null);
  const [activeStep, setActiveStep] = useState(0);


  const handleNavigate = () => {
    if (!selectedLokale) {
      alert('Vælg venligst et lokale først.');
      return;
    }

    const routeMap = {
      Gruppelokale: '/gruppeLokaleBooking',
      Klasselokale: '/klasselokaleBooking',
      'Open Learning': '/openLearningBooking',
      Diverse: '/diverseBooking',
    };

    const selectedRoute = routeMap[selectedLokale];
    if (selectedRoute) {
      router.navigate({ to: selectedRoute });
    } else {
      alert('Invalid option selected.');
    }
  };


  const bookingStyle = {
    display: "flex",
    margin: "24px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85vh"
  }

  const stepperStyle = {
    marginTop: "24px", 
    marginBottom: "24px", 
    width: "70%",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  }

  /*const steps = [
    { label: 'Step 1' },
    { label: 'Step 2'},
    { label: 'Step 3' },
    { label: 'Step 4' },
  ];*/


  return (
    <div>
      <Header />
      <div style={stepperStyle}>
      <StepperComponent 
      activeStep={activeStep} 
      setActiveStep={setActiveStep}
      handleNavigate={handleNavigate} 
      />
      </div>
    <div style={bookingStyle}>

    <CustomCalendar style={{ marginLeft: "24px" }} />
    <LokaleForm
    setSelectedLokale={setSelectedLokale}
    handleNavigate={handleNavigate}
    />

    </div>
    <Footer />
  </div>
  )
}

