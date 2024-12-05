/* eslint-disable react/prop-types */
import { Radio, Group } from '@mantine/core';



const containerStyling = {
    display: "flex",
    marginLeft: "24px",
    flexDirection: "column"
}

export default function EtageSelector ({ setSelectedEtage }) { //"setSelectedEtage" er en funktion modtaget som prop fra forældrekomponentet, som Bruges til at sende den valgte etage tilbage til forældrekomponentet, når en etage vælges
  return (
      <div style={containerStyling}>
      <Radio.Group
      withAsterisk //"withAsterisk" viser en stjerne for at angive, at valget er obligatorisk
      name="Etagevælger" //"name="Etagevælger"" navnet på radiogruppen
      label="Etage" //"label="Etage"" er overskriften, der vises over radioknapperne
      description="Vælg den etage du vil være på"
      onChange={(value) => setSelectedEtage(value)} //"onChange" håndterer ændringer. Når brugeren vælger en etage, sender den værdien til "setSelectedEtage" 
    >
    <Group mt="xl" style={{flexDirection: "column", justifyContent:"flex-start"}}>
      <Radio value="1" label="1. etage" /> {/*value" er værdien, der sendes til "setSelectedEtage" (fx "1" for 1. etage) */} 
      <Radio value="2" label="2. etage" /> {/*"label" er teksten, der vises ved siden af radioknappen */} 
      <Radio value="3" label="3. etage" />  
      <Radio value="4" label="4. etage" />  
    </Group>
    </Radio.Group>
    </div>
  );
}