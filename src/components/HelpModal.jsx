import React, { useState } from 'react';
import { Popover, Textarea, Button, Text } from '@mantine/core';
import { getSupabaseClient } from '../supabase/getSupabaseClient';

const supabase = getSupabaseClient();

function HelpPopover() {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState(null); // Håndterer status for feedbackbeskeden

  // Tænder og slukker popoveren
  const togglePopover = () => {
    setPopoverOpen((prev) => !prev);
    if (feedbackStatus) {
      setFeedbackStatus(null); // Nulstil feedback-status når popoveren åbnes igen
    }
  };

  // Funktion til at sende feedback
  const sendFeedback = async () => {
    setLoading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw new Error(userError.message);

      if (!user?.id) throw new Error('User ID mangler eller er ugyldigt');

      const { error: insertError } = await supabase
        .from('feedback')
        .insert({
          username_id: user.id, // Dette er nu et UUID
          hjælp_feedback: message, // Feedback er tekst, ikke UUID
          Email: user.email, // Vi antager, at brugerens email gemmes
        });

      if (insertError) throw new Error(insertError.message);

      setFeedbackStatus('Din besked er nu blevet sendt'); // Sæt feedbackstatus besked
      setMessage(''); // Ryd beskedfeltet

      // Luk popoveren efter kort tid
      setTimeout(() => {
        setPopoverOpen(false); // Luk popoveren efter at have vist feedback-status
      }, 2000);

    } catch (error) {
      console.error('Fejl ved indsendelse af feedback:', error.message);
      setFeedbackStatus('Kunne ikke sende din besked. Prøv igen.'); // Vis fejlbesked
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
          <div
            onClick={togglePopover}
            style={{
              position: 'fixed',
              top: '75vh',
              right: '25px',
              padding: '20px',
              backgroundColor: '#228BE6', // Blå farve for knappen
              color: 'white', // Hvid tekstfarve
              fontSize: '18px',
              fontWeight: 'bold', // Gør teksten fed for synlighed
              textAlign: 'center', // Centrerer teksten
              borderRadius: '8px', // Rundede hjørner for knappen
              cursor: 'pointer', // Skift cursor til pointer
              zIndex: 1000, // Sørg for at knappen er over andre indhold
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
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Skriv din besked her..."
            style={{ marginBottom: '12px' }}
            autosize // Aktiver autosize for automatisk ændring af størrelse
            minRows={3} // Minimum antal rækker, der skal vises
            maxRows={6} // Maksimum antal rækker for at begrænse størrelsen
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
