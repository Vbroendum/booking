import React, { useState, useEffect } from 'react';
import { Popover, TextInput, Button } from '@mantine/core';

function HelpPopover() {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [buttonTop, setButtonTop] = useState(0);

  // Track the scroll position and page height
  useEffect(() => {
    const updateButtonPosition = () => {
      const pageHeight = document.documentElement.scrollHeight; // Total page height
      const screenHeight = window.innerHeight; // Height of the visible window (viewport)
      
      // Calculate 75% of the total page height
      const targetPosition = pageHeight * 0.75;

      // The button's position will always be 75% of the total page height (relative to the viewport)
      setButtonTop(targetPosition - screenHeight * 0.75); // Adjust so it stays 75% down
    };

    // Update button position on window resize or page scroll
    window.addEventListener('scroll', updateButtonPosition);
    window.addEventListener('resize', updateButtonPosition);

    // Call once on mount to set the initial position
    updateButtonPosition();

    // Cleanup listeners
    return () => {
      window.removeEventListener('scroll', updateButtonPosition);
      window.removeEventListener('resize', updateButtonPosition);
    };
  }, []);

  const togglePopover = () => setPopoverOpen((prev) => !prev);

  return (
    <div>
      {/* Popover with the button styled the same */}
      <Popover
        opened={isPopoverOpen}
        onClose={() => setPopoverOpen(false)}
        position="fixed" // Popover appears to the right of the button
        withArrow
        width={350} // Increase the modal width for better fit
        style={{
          position: 'absolute',
          top: buttonTop, // Position popover based on scroll
          right: '25px',
          zIndex: 1001,
          backgroundColor: '#228BE6',
          color: 'white',
          height: '75px',
        }}
      >
        <Popover.Target>
          <Button
            onClick={togglePopover}
            style={{
              position: 'absolute', // Fixed position relative to the viewport
              top: buttonTop, // Position the button at 75% of the total page height
              right: '25px', // Align it to the right
              padding: '15px',
              backgroundColor: '#228BE6',
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
              backgroundColor: '#D9D9D9 !important', // Set the background color of the text input to match the modal
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
          <p style={{ color: 'red', textAlign: 'left' }}>
            Chatbotten er ikke tilgængelig lige nu.
          </p>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export default HelpPopover;
