/* eslint-disable react/prop-types */
import { Modal, Text, Button, Title, Stack } from '@mantine/core';
import CalendarIcon from '/src/assets/calendar.svg';
import ClockIcon from '/src/assets/clock.svg';
import LocationIcon from '/src/assets/home.svg';
import UserIcon from '/src/assets/user.svg';
import GitIcon from '/src/assets/git-pull.svg';
import { useRouteContext } from '@tanstack/react-router';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import { useEffect, useState } from 'react';

const supabase = getSupabaseClient(); 

//BookingBekraeftelse er et funktionelt komponent som modtager 4 props som bruges i komponentet (lokale - oplysninger om lokale, opened - en boolean der angiver at modalvinduet er åbent, closeModal - lukker modalvinduet, onConfirm - en funktion der kaldes når brugeren bekræfter booking)
function BookingBekraeftelse( { lokale, opened, closeModal, onConfirm }) {
  //useState opretter en state-variabel kaldet userRole
  //userRole gemmer brugerens rolle (lærer/elev)
  //setUserRole en funktion til at ændre værdien af userRole
  const [userRole, setUserRole] = useState('');
  //useState opretter en state-variabel kaldet "loading"
  //loading indikere om komponentet er i en loading/indlæsnings tilstand
  //setLoading er en funktion som ændre værdien af "loading"
  //Datatypen er en Boolean (True eller false)
  const [loading, setLoading] = useState(true);  
//useRouteContext anvendes til at hente routing-kontekst "to/bekræftBooking" angiver at funktionen forbereder eller henter data relateret til "/bekræftBooking"
//context-variablen modtager information om den aktuelle eller kommende rute. Dette kan være nyttigt hvis der er behov for at vide hvor brugeren navigere hen (fx hvilken rute der er den næste), eller for at interagere fx hvis "/bekræftBooking" forventer noget særligt data.
  const context = useRouteContext({to: "/bekræftBooking"})
  console.log(context)
//useEffect hooken kører når komponentet renderes føreste gang. dette skyldes den tomme array "[]" som dependancy der sørger for at fetchUserRole kun kaldes en gang(ved første indlæsning af komponentet)
  useEffect(() => {
    //fetchUserRole er en asynkron funktion (async) som kalder på supabase.authgetUser() som henter brugerens oplysninger fra supabase auth så som "data: user" der indeholder brugerdetaljer (UUID (Universally unique identifier), email osv) og "error: authError" som fanger fejl, hvis der er problemer med at hente brugeren.
    const fetchUserRole = async () => {
      //får den nuværende bruger som er logget ind's UUID (Universally unique identifier) fra Supabase Auth
      const { data: user, error: authError } = await supabase.auth.getUser();
      //Hvis der er en fejl (authError) eller brugeren mangler (!user) Logger fejlen til konsollen, sætter userRole til "ukendt" ved hjælp af setUserRole('ukendt'), stopper indlæningstilstanden ved at kalde setLoading(false).
      if (authError || !user) {
        console.error('Error fetching user:', authError?.message || 'User not found');
        setUserRole('Ukendt');
        setLoading(false);
        return;
      }

      console.log('Logged-in user:', user);  // Hvis brugeren er fundet logger den brugerens data
        // Når du bruger try, kører du en blok af kode, som du forventer kan kaste en fejl (fx et netværkskald, filoperationer eller operationer, der kan mislykkes). Hvis der opstår en fejl inden for try-blokken, stopper den koden fra at køre videre i den blok og hopper til catch-blokken, hvor fejlen kan håndteres.

      try {
        //Dataforespørgsel med Supabase (Resultatet af denne forespørgsel er gemt i userData, og eventuelle fejl under forespørgslen bliver gemt i queryError.)
        const { data: userData, error: queryError } = await supabase
          .from('userdata') //supabase.from('userdata'): henter data fra tabellen "userdata" i Supabase-databasen.
          .select('user_id, is_teacher') //select('user_id, is_teacher'): vælger kolonnerne "user_id" og "is_teacher" fra tabellen.
          .eq('user_id', user.user.id) //eq('user_id, user.user.id): filtrere for den række, hvor "user_id" svarer til den nuværende authenticatede brugers ID
          .single();  //singe(): indikere, at du forventer kun 1 række som resultat.

        //Hvis der er en fejl i forespørgslen (queryError), vil den blive logget til konsollen og userRole bliver sat til "Ukendt".
        if (queryError) {
          console.error('Error fetching user data:', queryError.message);
          setUserRole('Ukendt');
        } else {
          // Sætter bruger rollen baseret på userData?.is_teacher
          console.log('User data:', userData); 
          setUserRole(userData?.is_teacher ? 'Lærer' : 'Studerende'); //hvis is_teacher er true, sættes rollen til "lærer". Hvis is_teacher er false eller ikke findes, sættes rollen til "studerende".
        }
      } catch (error) {
        console.error('Error during query execution:', error); // dette bruges til at fange eventuelle fejl som så bliver logget, og "userRole" bliver sat til "ukendt". Dette sikrer, at applikationen håntere uventede fejl og fortsætter med en fallback-rolle.
        setUserRole('Ukendt');
      } finally { //finally blokken bruges til at definere kode der atlid vil køre uanset om der opstår fejl i "try"- blokken eller ej.
        setLoading(false); //her sættes setLoading(false) for at indikere at indlæsningen er færdig.
      }
    };

    fetchUserRole(); // Dette kalder på funktionen kaldet "fetchUserRole", hvor "fetchUserRole" bruges til at hente brugerdata fra API'en Supabase og opdatere brugerens rolle i applikationen. funktionen indeholder en asynkron (async) opgave (som henter data fra en server) og vil opdatere din tilstand når den er færdig. 
  }, []); //Denne linje slutter den "useEffect" hook. Den sikrer at koden i "useEffect" kun køres 1 gang ved første render af komponentet hvilket skyldes den tomme array "[]"

  //Denne del af koden håndterer den visuelle præsentation af din komponent, mens dataene stadig bliver hentet, altså når loading er true.
  //"loading" er en tilstand (state), der blev oprettet med useState, og den indikerer, om dataene stadig er ved at blive hentet.
  if (loading) { //Hvis loading er true, betyder det, at dataene stadig er ved at blive indlæst, og komponenten viser teksten "Loading...".
    return <Text>Loading...</Text>; //Når loading er true, returneres JSX med en <Text>-komponent, der viser teksten "Loading...". Denne tekst vil blive vist på skærmen, indtil dataene er hentet, og loading bliver sat til false.
  }


    return (
      <Modal
        opened={opened} // opened={opened}: Denne prop styrer, om modalvinduet er åbent eller lukket. opened er en tilstand, der bestemmer, om modalvinduet skal vises.
        onClose={closeModal}// onClose={closeModal}: Denne prop definerer en funktion, "closeModal", der kaldes, når modalvinduet skal lukkes (fx ved at trykke på en luk-knap eller udenfor modalvinduet).
        centered // gør så modalvinduet vises centralt på skærmen
        size="55rem"
        radius={15} 
        title={<Text style={{ fontWeight: '600', position: 'absolute', left: '40%', top: '30%' }}>Bekræftelse af booket lokale</Text>}
      >
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
    {/* Left Column */}
    <Stack>
        <Text style={{marginTop: '50px', marginLeft: '20px'}}>Vi kan nu bekræfte at dit ønskede lokale er reserveret og booket til dig, god fornøjelse!</Text>
        <Text style={{marginLeft: '20px'}}>På undersiden “Mine Bookinger er der muligt at se din booking af lokale.</Text>
    </Stack>
    
    

    {/* Right Column */}
    <div style={{justifyContent: 'flex-end'}}>
    <Stack>
        <Title style={{marginLeft: '106px', fontWeight: '500', fontSize: '24px'}}>Detaljer:</Title>
        <Text>
            <img src={CalendarIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            {/* "context" er et objekt der indeholder data om booking detaljer*/}
            <strong>Dato:</strong> {context.dateInfo.selected.toString()}
            {/*"dateInfo" er en understruktur i "context" der gemmer informationer relateret til dato
            //"selected" indeholder den valgte dato for booking
            //"toString()" konverter værdien til en tekststreng. Når "selected" er et Date-objekt, gør "toString()" det til en læsbar strengpræsentation af datoen*/}
        </Text>
        <Text>
            <img src={ClockIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            {/*"context" er en variabel der indeholder information om booking detaljer.  
            Tidligere i koden blev context hentet fra funktionen useRouteContext(), hvilket betyder, at den indeholder data, som er blevet samlet undervejs, fx bookingdato, tidspunkt og antal personer*/}
            <strong>Tidspunkt:</strong> {context.startTimeInfo.startTime} - {context.endTimeInfo.endTime}
            {/*"context.startTimeInfo" er et objekt, der indeholder oplysninger om starttidspunktet for bookingen.
            //"startTime" er selve værdigen for starttidspunktet
            //Det fungerer på samme måde for endTimeInfo & endTime*/}
        </Text>
        <Text>
            <img src={LocationIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Lokale: </strong> {lokale || 'ikke angivet'} {/*//Vist med et "LocationIcon" og det valgte lokale, som er angivet i "lokale"-variablen.*/}
        </Text>
        <Text>
            <img src={UserIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Antal personer:</strong> {context.numberOfPeopleInfo.numberOfPeople} {/*//Vist med et "UserIcon" og antallet af personer, som er hentet fra context.numberOfPeopleInfo.numberOfPeople.*/}
        </Text>
        <Text>
            <img src={GitIcon} alt="Calendar" style={{ width: '20px', marginLeft: '80px', marginRight: '8px' }} />
            <strong>Booket af:</strong> {userRole} {/*//Vist med et "GitIcon" og den rolle, som brugeren har fx "lærer" eller "studerende", som er angivet i "userRole".*/}
        </Text>
    </Stack>
    
    </div>
  </div>
  {/* //En Button med teksten "Bekræft Booking". Når denne knap klikkes, kaldes funktionen "onConfirm", som håndterer bekræftelsen af bookingen dette opdatere så vores Supabase database som så viser at lokalet er booket.*/}
  <Button 
    style={{marginLeft: '20px', marginBottom: '20px'}}
    onClick={onConfirm}>
        Bekræft Booking
    </Button>
</Modal>

    
  )};


export default BookingBekraeftelse;
