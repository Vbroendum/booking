import { Stepper, Button, Group } from '@mantine/core';

export default function StepperComponent({ steps, activeStep, setActiveStep }) {
  const handleNextStep = () => setActiveStep((current) => Math.min(current + 1, steps.length - 1));
  const handlePreviousStep = () => setActiveStep((current) => Math.max(current - 1, 0));

  return (
    <div style={{ margin: '40px auto', width: '70%', textAlign: 'center' }}>
      {/* Stepper with only icons */}
      <Stepper
        active={activeStep}
        onStepClick={setActiveStep}
        styles={{
          stepLabel: {
            display: 'none', // Hides the labels
          },
          stepBody: {
            display: 'none', // Hides the content
          },
        }}
      >
        {steps.map((_, index) => (
          <Stepper.Step key={index} />
        ))}
        <Stepper.Completed />
      </Stepper>

    </div>
  );
}
