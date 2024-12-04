/* eslint-disable react/prop-types */
import { Stepper } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

export default function StepperComponent({ activeStep, setActiveStep,  }) {
  const navigate = useNavigate();
  
  const handleStepClick = (step) => {
    if (step === 0) {
      // Hvis man er på det første trin, navigerer man til den forrige side
      navigate(-1);  // Går tilbage til forrige side
    } else {
      setActiveStep(step);  // Ellers ændres det aktive trin bare
    }
  };
  

  return (
    <div style={{ margin: '40px auto', width: '70%', textAlign: 'center' }}>
      {/* Stepper with only icons */}
      <Stepper
        active={activeStep}
        onStepClick={handleStepClick}
        styles={{
          stepLabel: {
            display: 'none', // Hides the labels
          },
          stepBody: {
            display: 'none', // Hides the content
          },
        }}
      >
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Completed />
      </Stepper>

    </div>
  );
}
