import { Button, Group } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';
import StepperComponent from './Steps';

const StepperNavigation = ({ activeStep, setActiveStep }) => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    // Hvis man klikker på knappen, navigeres man altid tilbage til frontpage
    navigate('/frontpage'); // Navigates to frontpage regardless of step
  };

  return (
    <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
      <Group position="apart" style={{ width: '100%' }}>
        <Button 
          variant="light" 
          onClick={handleBackClick}
          style={{ margin: '0 16px' }}
        >
          Tilbage til booking startside
        </Button>

        <div style={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
          <StepperComponent 
            activeStep={activeStep} 
            setActiveStep={setActiveStep} 
          />
        </div>
      </Group>
    </div>
  );
};

export default StepperNavigation;
