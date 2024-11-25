import React from 'react';
import { Stepper, Button, Group } from '@mantine/core';

export default function StepperComponent({ steps, activeStep, setActiveStep }) {
  const handleNextStep = () => setActiveStep((current) => Math.min(current + 1, steps.length - 1));
  const handlePreviousStep = () => setActiveStep((current) => Math.max(current - 1, 0));

  return (
    <div>
      {/* Stepper Component */}
      <Stepper
        active={activeStep}
        onStepClick={setActiveStep}
        orientation="horizontal" // Default orientation
        iconPosition="top" // Moves the label below the icon
        size='md'
        breakpoint="sm"
      >
        {steps.map((step, index) => (
          <Stepper.Step key={index} label={step.label}>
            {step.content}
          </Stepper.Step>
        ))}
        <Stepper.Completed>
          <h2>All steps completed!</h2>
          <p>You can now proceed further.</p>
        </Stepper.Completed>
      </Stepper>
    </div>
  );
}
