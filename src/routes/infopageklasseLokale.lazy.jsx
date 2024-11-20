// Import necessary libraries and components
import { createLazyFileRoute } from '@tanstack/react-router';
import FlashCard from '../components/FlashCard2';
import { useState } from 'react';

// Define route
export const Route = createLazyFileRoute('/infopageklasseLokale')({
  component: RouteComponent,
});

// Route component function
function RouteComponent() {
  // State to track selected floor
  const [selectedFloor, setSelectedFloor] = useState(1);

  // Handle floor change
  const handleFloorChange = (floor) => setSelectedFloor(floor);

  // Sample data for rooms
  const rooms = [
    { id: 1, title: 'Lokale 1', floor: 1 },
    { id: 2, title: 'Lokale 2', floor: 1 },
    { id: 3, title: 'Lokale 3', floor: 2 },
    { id: 4, title: 'Lokale 4', floor: 2 },
    { id: 5, title: 'Lokale 5', floor: 3 },
    { id: 6, title: 'Lokale 6', floor: 3 },
    { id: 7, title: 'Lokale 7', floor: 4 },
    { id: 8, title: 'Lokale 8', floor: 4 },
    { id: 9, title: 'Lokale 9', floor: 4 },
  ];

  // Filter rooms based on the selected floor
  const filteredRooms = rooms.filter((room) => room.floor === selectedFloor);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Klasselokaler</h1>
      </header>

      <div style={styles.contentWrapper}>
        {/* Main Content Section */}
        <main style={styles.mainContent}>
          {filteredRooms.map((room) => (
            <FlashCard
              key={room.id}
              title={room.title}
              description={
                <ul>
                  <li>Stor skærm</li>
                  <li>Tavle</li>
                  <li>Tuscher</li>
                  <li>Papir</li>
                </ul>
              }
            />
          ))}
        </main>

        {/* Sidebar Section */}
        <aside style={styles.sidebar}>
          <h3>Etage</h3>
          <form>
            {[1, 2, 3, 4].map((floor) => (
              <div key={floor}>
                <input
                  type="radio"
                  id={`floor-${floor}`}
                  name="floor"
                  value={floor}
                  checked={selectedFloor === floor}
                  onChange={() => handleFloorChange(floor)}
                />
                <label htmlFor={`floor-${floor}`} style={styles.radioLabel}>
                  {floor}. Etage
                </label>
              </div>
            ))}
          </form>
        </aside>
      </div>
    </div>
  );
}

// Styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    minHeight: '100vh', // Makes the container fill the viewport height
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'left', // Centers the header text
  },
  headerTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  contentWrapper: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center', // Centers the content horizontally
    alignItems: 'center', // Centers the content vertically
    width: '100%',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    alignItems: 'start',
    justifyContent: 'center', // Ensures the FlashCards are centered
  },
  sidebar: {
    minWidth: '200px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  radioLabel: {
    marginLeft: '8px',
  },
};

