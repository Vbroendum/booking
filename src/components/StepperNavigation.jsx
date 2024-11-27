import {Button, Group} from '@mantine/core'
import { useRouter } from '@tanstack/react-router' 
import  StepperComponent  from './Steps'

const StepperNavigation = ({ activeStep, setActiveStep, backRoute = '/'}) => {
    const router = useRouter
    console.log("activeStep", activeStep)
}

<div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <Group position="apart" style={{ width: '100%' }}>
          {/* Tilbage Button */}
          <Button 
            variant="light" 
            onClick={() => router.navigate({to: backRoute})}
            style={{ margin: '0 16px' }}>
            Tilbage
          </Button>

          {/* Stepper */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
            <StepperComponent 
              activeStep={activeStep} 
              setActiveStep={setActiveStep} 
            />
          </div>
        </Group>
      </div>

      export default StepperNavigation; 