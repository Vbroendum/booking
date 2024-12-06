import { Stepper } from '@mantine/core';

export default function StepperComponent({ activeStep, setActiveStep }) {
  const handleStepClick = (step) => {
    if (step === 0) {
      // If on the first step, no need to go back further
      setActiveStep(0);  // Keeps the step at step 0
    } else {
      setActiveStep(step);  // Updates the active step for other steps
    }
  };

  return (
    <div style={{ margin: '40px auto', width: '70%', textAlign: 'center' }}>
      {/* Stepper with only icons */}
      <Stepper
        active={activeStep}
        onStepClick={handleStepClick}
        allowNextStepsSelect={false}
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
