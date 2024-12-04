import React, { useState } from 'react';
import { Popover, TextInput, Button } from '@mantine/core';

function HelpPopover() {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [message, setMessage] = useState('');

  const togglePopover = () => setPopoverOpen((prev) => !prev);

  return (
    <div>
      {/* Popover with the button styled the same */}
      <Popover
        opened={isPopoverOpen}
        onClose={() => setPopoverOpen(false)}
        position="right" // Popover appears to the right of the button
        withArrow
        width={350} // Increase the modal width for better fit
        style={{
          position: 'absolute',
          top: '75vh', // Position button to 75% from top of the viewport
          right: '25px',
          zIndex: 1001,
          backgroundColor: '#228BE6',
          color: 'white',
          height: '75px'
           // Ensure the popover appears above other content
        }}
      >
        <Popover.Target>
          <Button
            onClick={togglePopover}
            style={{
              position: 'fixed', // Fix the button relative to the viewport
              top: '75vh', // Fixed position of the button
              right: '25px', // Align it to the right
              padding: '25px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: '150px',
              textAlign: 'center',
            }}
          >
            Brug for hjælp?
          </Button>
        </Popover.Target>

        {/* Popover Dropdown */}
        <Popover.Dropdown
          style={{
            backgroundColor: '#228BE6', 
            padding: '20px',
            borderRadius: '8px',
            width: '30%',
            boxSizing: 'border-box',
          }}
        >
          <h2
            style={{
              textAlign: 'left',
              fontSize: '18px',
              marginBottom: '10px',
              color: 'white',
            }}
          >
            Skriv til os, hvis du har brug for hjælp
          </h2>
          <p style={{ textAlign: 'left', marginBottom: '20px', color: 'white' }}>
            Så vender vi tilbage hurtigst muligt.
          </p>

          {/* TextInput with custom styling */}
          <TextInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Skriv din besked her..."
            style={{
              backgroundColor: '#D9D9D9 !important', // Set the background color of the text input to match the moda
              color: '#868E96', // Text color inside the input field
              fontSize: '16px',
              height: '75px',
              width: '100%',
              marginBottom: '12px',
              '&:focus': {
                borderColor: '#007BFF', // Optional: highlight the border when focused
              },
            }}
          />
          <p style={{ color: 'white', textAlign: 'left' }}>
            Chatbotten er ikke tilgængelig lige nu.
          </p>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export default HelpPopover