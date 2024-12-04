import React, { useState } from 'react';
import { Popover, Textarea, Button, Text } from '@mantine/core';
import { getSupabaseClient } from '../supabase/getSupabaseClient';

const supabase = getSupabaseClient();

function HelpPopover() {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState(null); // For managing feedback status message

  const togglePopover = () => {
    setPopoverOpen((prev) => !prev);
    if (feedbackStatus) {
      setFeedbackStatus(null); // Reset feedbackStatus when the popover is opened again
    }
  };

  const sendFeedback = async () => {
    setLoading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw new Error(userError.message);

      if (!user?.id) throw new Error('User ID is missing or invalid');

      const { error: insertError } = await supabase
        .from('feedback')
        .insert({
          username_id: user.id, // This is a UUID now
          hjælp_feedback: message, // Feedback is text, not UUID
          Email: user.email, // Assuming you're storing user email
        });

      if (insertError) throw new Error(insertError.message);

      setFeedbackStatus('Din besked er nu blevet sendt'); // Set feedback status message
      setMessage(''); // Clear the message

      // Close the popover after a short delay
      setTimeout(() => {
        setPopoverOpen(false); // Close the popover after showing feedback status
      }, 2000);

    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      setFeedbackStatus('Kunne ikke sende din besked. Prøv igen.'); // Show error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Popover
        opened={isPopoverOpen}
        onClose={() => setPopoverOpen(false)}
        position="right"
        withArrow
        width={350}
      >
        <Popover.Target>
          {/* Custom Button with White Text and Blue Background */}
          <div
            onClick={togglePopover}
            style={{
              position: 'fixed',
              top: '75vh',
              right: '25px',
              padding: '20px',
              backgroundColor: '#228BE6', // Blue color for the button
              color: 'white', // Text color white
              fontSize: '18px',
              fontWeight: 'bold', // Make text bold for visibility
              textAlign: 'center', // Center align the text
              borderRadius: '8px', // Rounded corners for the button
              cursor: 'pointer', // Change cursor to pointer
              zIndex: 1000, // Ensure button is above other content
            }}
          >
            Har du feedback?
          </div>
        </Popover.Target>

        <Popover.Dropdown
          style={{
            backgroundColor: '#228BE6',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <h2 style={{ color: 'white', marginTop: '0', marginBottom: '10px' }}>
            Del din feedback med os, så kigger vi på det
          </h2>
          {/* Textarea with autosize enabled */}
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Skriv din besked her..."
            style={{ marginBottom: '12px' }}
            autosize // Enable autosize for automatic resizing
            minRows={3} // Minimum rows to display even when input is empty
            maxRows={6} // Maximum rows to limit excessive growth
          />
          {feedbackStatus && (
            <Text style={{ color: feedbackStatus.includes('Kunne ikke') ? 'red' : 'white', marginBottom: '12px' }}>
              {feedbackStatus}
            </Text>
          )}
          <Button onClick={sendFeedback} color="green" fullWidth loading={loading}>
            Send Besked
          </Button>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}

export default HelpPopover;
