import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';

function ProgressPage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div>
      <ProgressBar activeStep={activeStep} />
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleBack} disabled={activeStep === 0}>
          Back
        </button>
        <button onClick={handleNext} disabled={activeStep === 3}>
          Next
        </button>
      </div>
    </div>
  );
}

export const Route = ProgressPage;
