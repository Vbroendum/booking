/* eslint-disable react/prop-types */
import { Stepper } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

export default function StepperComponent({ activeStep, setActiveStep,  }) {
  const navigate = useNavigate();
  
  const handleStepClick = (step) => {
    if (step === 0) {
      // If it's the first step, navigate to the previous page
      navigate(-1);  // Go back to the previous page
    } else {
      setActiveStep(step);  // Otherwise, just change the active step
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
