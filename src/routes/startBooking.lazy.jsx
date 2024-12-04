import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react';
import LokaleForm from '../components/Lokaleform';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StepperComponent from '../components/Steps';
import { Group, Button, } from '@mantine/core'
import CustomCalendar from '../components/CustomCalendar';

export const Route = createLazyFileRoute('/startBooking')({
  component: StartBooking,
})

// states for selectedLokale, selectedDate, selectedStartTime, selectedEndTime, activeStep
function StartBooking() {
  const router = useRouter()
  const [selectedLokale, setSelectedLokale] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [activeStep, setActiveStep] = useState(0);


  // Funktion til at navigere til næste side når alle krav er opfyldt
  const handleNavigate = () => {
    if (!selectedLokale) { // Laver en alert hvis 'selectedLokale' ikke har en værdi
      alert('Vælg venligst et lokale først.');
      return;
    }

    if (!selectedDate) { // Laver en alert hvis 'selectedDate' ikke har en værdi
      alert('Vælg venligst en dato først.');
      return;
    }

    if (!selectedStartTime) { // Laver en alert hvis 'selectedStartTime' ikke har en værdi
      alert('Vælg venligst et start tidspunkt først.');
      return;
    }

    if (!selectedEndTime) { // Laver en alert hvis 'selectedEndTime' ikke har en værdi
      alert('Vælg venligst et slut tidspunkt først.');
      return;
    }

    // routeMap som fortæller hvilke værdier peger til hvilke routes
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
    marginLeft: "200px",
    marginRight: "150px",
    paddingBottom: "150px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85vh"
  }


  return (
    <div>
      <Header />
      <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <Group position="apart" style={{ width: '100%' }}>
          {/* Tilbage Button */}
          <Button 
            variant="light" 
            onClick={() => router.navigate({to: '/frontpage'})}
            style={{ margin: '0 16px' }}>
            Tilbage
          </Button>

          {/* Stepper */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
            <StepperComponent 
              activeStep={activeStep} 
              setActiveStep={setActiveStep} 
            />
          </div>
        </Group>
      </div>
    <div style={bookingStyle}>

    <CustomCalendar
    setSelectedDate={setSelectedDate}
    style={{ marginLeft: "0px" }}
    />

    <LokaleForm
    setSelectedLokale={setSelectedLokale}
    setSelectedStartTime={setSelectedStartTime}
    setSelectedEndTime={setSelectedEndTime}
    handleNavigate={handleNavigate}
    />
    

    </div>
    <Footer />
  </div>
  )
}

