import { Stepper } from '@mantine/core';

export default function StepperComponent({ activeStep, setActiveStep, handleNavigate }) {
  const handleStepClick = (step) => {
      setActiveStep(step);
      handleNavigate();
  }

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
        <Stepper.Step />
        <Stepper.Completed />
      </Stepper>

    </div>
  );
}
