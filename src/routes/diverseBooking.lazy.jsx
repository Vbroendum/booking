import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { getSupabaseClient } from '../supabase/getSupabaseClient'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import FlashCard from '../components/FlashCard'
import EtageSelector from '../components/EtageSelector'
import { Grid, Title, Box, Group, Button } from '@mantine/core'
import StepperComponent from '../components/Steps'
import HelpModal from '../components/HelpModal';

const supabase = getSupabaseClient()

export const Route = createLazyFileRoute('/diverseBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  const [lokaler, setLokaler] = useState([]);
  const [selectedEtage, setSelectedEtage] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const router = useRouter(); 

  useEffect(() => {
    // Hent data fra backenden
    const fetchLokaler = async () => {
      try {
         let query = supabase
        .from('lokale')
        .select('id, lokalenr, lokaleimage, description, etage')
        .eq('lokaletype', 'diverse')
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
            style={{ margin: '0 16px', position: 'absolute' }}
            >
            Genstart booking
          </Button>

          {/* Stepper */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <StepperComponent 
              activeStep={activeStep} 
              setActiveStep={setActiveStep} 
            />
          </div>
        </Group>
      </div>
        <Grid gutter="md" style={{ alignItems: 'flex-start', overflowX: "hidden", overflowY: "hidden"}}>
          {/* Left side: FlashCards */}
          <Grid.Col span={10}>
            <Title order={1} align="left" style={{ marginBottom: '16px', marginLeft: '32px' }}>
              Diverse lokaler
            </Title>
            <Grid gutter="lg">

              {/* Mapper over alle entries i tabellen lokaler, og laver et flashcard component til hver entry der er lig med diverse lokaler, og lægger kolonnerne ind i de props fra flashcard */}
              {lokaler.length > 0 ? (
              lokaler.map((lokale) => (
                <Grid.Col span={4} key={lokale.id}>
                  <FlashCard
                    title={`Lokale ${lokale.lokalenr}`}
                    imageUrl={lokale.lokaleimage}
                    description={lokale.description}
                    button="Vælg"
                    navigation={`/bekræftBooking?lokalenr=${lokale.lokalenr}`}
                  />
                </Grid.Col>
              ))
            ) : (
              <Grid.Col span={12}>
                {/* Hvis der ingen lokaler er tilgængelig, vil denne blive vist, i vores tilfælde har vi et filtersystem som kigger efter etage. 
                Og er der ingen værdier der bliver returned med den etage man vælger, kommer denne istedet for flashcards med lokaler. 
                Dette ville også kunne bruges, hvis man laver en funktion der gør det umuligt at booke et lokale, hvis det i forvejen er booket inden for tidsrammen */}
            <Title order={3} align="left" style={{ color: 'gray', marginTop: '24px', marginLeft: '32px' }}>
            Ingen lokaler tilgængelig
            </Title>
            </Grid.Col>
            )}
            </Grid>
          </Grid.Col>
  
          {/* Right side: EtageSelector */}
          <Grid.Col span={2}>
            <Box style={{ position: 'sticky', top: '16px' }}>
              <EtageSelector setSelectedEtage={setSelectedEtage} />
            </Box>
          </Grid.Col>
        </Grid>
        <HelpModal />
    </div>
  );
  }
