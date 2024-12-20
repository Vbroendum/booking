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

function StartBooking() {
  const router = useRouter()
  const [selectedLokale, setSelectedLokale] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [activeStep, setActiveStep] = useState(0);


  const handleNavigate = () => {
    if (!selectedLokale) {
      alert('Vælg venligst et lokaletype først.');
      return;
    }

    if (!selectedDate) {
      alert('Vælg venligst en dato først.');
      return;
    }

    if (!selectedStartTime) {
      alert('Vælg venligst en starttid først.');
      return;
    }

    if (!selectedEndTime) {
      alert('Vælg venligst en sluttid først');
      return;
    }

    if (selectedStartTime >= selectedEndTime) {
      alert('Sluttidspunktet skal være senere end starttidspunktet.');
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
    marginLeft: "150px",
    marginRight: "150px",
    paddingBottom: "150px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "300px",
    height: "85vh"
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
      <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <Group position="apart" style={{ width: '100%' }}>
          {/* Tilbage Button */}
          <Button 
            variant="light" 
            onClick={() => router.navigate({to: '/frontpage'})}
            style={{ margin: '0 16px', position: 'absolute' }}
            >
            Afbryd booking
          </Button>

          {/* Stepper */}
          <div style={{ width: '100%' }}>
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

