import { createLazyFileRoute } from '@tanstack/react-router'
import { getSupabaseClient } from '../supabase/getSupabaseClient'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import FlashCard from '../components/FlashCard'

const supabase = getSupabaseClient()

export const Route = createLazyFileRoute('/klasselokaleBooking')({
  component: RouteComponent,
})


function RouteComponent() {
  const [lokaler, setLokaler] = useState([]);

useEffect(() => {
  // Fetch data from the backend
  const fetchLokaler = async () => {
    try {
      const {data, error } = await supabase
      .from('lokale')
      .select('id, lokalenr, lokaleimage, description')
      .eq('lokaletype', 'klasselokale')
      .order('lokalenr', { ascending: true });
      
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
}, [])

return (
  <div><Header/>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    
      {lokaler.map((lokale) => (
        <FlashCard
          key={lokale.id}
          title={`Lokale ${lokale.lokalenr}`}
          imageUrl={lokale.lokaleimage} // Pass image URL
          description={lokale.description} // Pass description array
          button="Vælg"
          navigation={`/lokale/${lokale.id}`} // Example route
        />
      ))}
      </div>
    </div>
)}
