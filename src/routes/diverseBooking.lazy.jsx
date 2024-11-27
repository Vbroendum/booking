import { createLazyFileRoute } from '@tanstack/react-router'
import { getSupabaseClient } from '../supabase/getSupabaseClient'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import FlashCard from '../components/FlashCard'
import EtageSelector from '../components/EtageSelector'
import { Grid, Title, Box } from '@mantine/core'

const supabase = getSupabaseClient()

export const Route = createLazyFileRoute('/diverseBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  const [lokaler, setLokaler] = useState([]);
  const [selectedEtage, setSelectedEtage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
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
        <Grid gutter="md" style={{ alignItems: 'flex-start' }}>
          {/* Left side: FlashCards */}
          <Grid.Col span={10}>
            <Title order={1} align="left" style={{ marginBottom: '16px', marginLeft: '32px' }}>
              Diverse lokaler
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
