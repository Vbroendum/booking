import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { getSupabaseClient } from '../supabase/getSupabaseClient'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import FlashCard from '../components/FlashCard'
import EtageSelector from '../components/EtageSelector'
import { Grid, Title, Box, Group, Button } from '@mantine/core'
import StepperComponent from '../components/Steps'

const supabase = getSupabaseClient()

export const Route = createLazyFileRoute('/gruppelokaleBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  const [lokaler, setLokaler] = useState([]);
  const [selectedEtage, setSelectedEtage] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const router = useRouter;
  

  useEffect(() => {
    // Fetch data from the backend
    const fetchLokaler = async () => {
      try {
         let query = supabase
        .from('lokale')
        .select('id, lokalenr, lokaleimage, description, etage')
        .eq('lokaletype', 'gruppelokale')
        .order('lokalenr', { ascending: true });
  
        if (selectedEtage) {
          query = query.eq('etage', selectedEtage);
        }
  
        const { data, error } = await query;
        
        if (error) {
          console.error('Error fetching lokaler:', error);
        } else {
          console.log(data)  
  
          setLokaler(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err)
      }
    };
  
    fetchLokaler();
  }, [selectedEtage])

    return (
      <div>
        <Header />

        <div style={{ marginTop: '24px', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
        <Group position="apart" style={{ width: '100%' }}>
          {/* Tilbage Button */}
          <Button 
            variant="light" 
            onClick={() => router.navigate({to: '/startBooking'})}
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
          <Grid gutter="md" style={{ alignItems: 'flex-start' }}>
            {/* Left side: FlashCards */}
            <Grid.Col span={10}>
              <Title order={1} align="left" style={{ marginBottom: '16px', marginLeft: '32px' }}>
                Gruppelokale
              </Title>
              <Grid gutter="lg" marginRight="32px">
                {lokaler.map((lokale) => (
                  <Grid.Col span={4} key={lokale.id}>
                    <FlashCard
                      title={`Lokale ${lokale.lokalenr}`}
                      imageUrl={lokale.lokaleimage}
                      description={lokale.description}
                      button="Vælg"
                      navigation={`/lokale/${lokale.id}`}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
    
            {/* Right side: EtageSelector */}
            <Grid.Col span={2}>
              <Box style={{ position: 'sticky', top: '16px' }}>
                <EtageSelector setSelectedEtage={setSelectedEtage} />
              </Box>
            </Grid.Col>
          </Grid>
      </div>
    );
    }

