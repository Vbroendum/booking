import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import Header from '../components/Header'
import StepperComponent from '../components/Steps'
import { useState } from 'react'
import { Group, Button } from '@mantine/core'
import MinebookingCard from '../components/MinebookingCard'
import { useRouteContext } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/bekræftBooking')({
  component: RouteComponent,
})



function RouteComponent() {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState(2);

    const context = useRouteContext({from: '/bekræftBooking'})

  return (
    <div>
    <Header/>

    <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <Group position="apart" style={{ width: '100%' }}>
          {/* Tilbage Button */}
          <Button 
            variant="light" 
            onClick={() => router.navigate({to: '/frontpage'})}
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            width: '50',      // Set a fixed width
            maxWidth: '90%',     // Prevent overflow on smaller screens
          }}
        >
          <MinebookingCard 
          buttonText={'Bekræft booking'}
          color="blue"
          date={context.setDateInfo}
          time={context.setStartTimeInfo}
          people={context.setNumberOfPeopleInfo}
          />
        </div>
      </div>
    </div>
  )
}
