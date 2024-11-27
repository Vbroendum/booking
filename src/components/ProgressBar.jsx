import React from 'react';
import { Stepper, rem } from '@mantine/core';

function ProgressBar({ activeStep }) {
  return (
    <Stepper
      active={activeStep}
      styles={{
        stepBody: {
          display: 'block',
          textAlign: 'center',
        },
        step: {
          padding: 0,
        },
        stepIcon: {
          borderWidth: rem(4),
        },
        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
    >
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Complete your profile" />
      <Stepper.Step label="Step 4" description="Get full access" />
    </Stepper>
  );
}

export default ProgressBar;
