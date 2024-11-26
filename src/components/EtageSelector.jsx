import { Radio, Group } from '@mantine/core';



const containerStyling = {
    display: "flex",
    width: "13%",
    margin: "24px"
}

export default function EtageSelector ({ setSelectedEtage }) {
  return (
      <div style={containerStyling}>
      <Radio.Group
      withAsterisk 
      name="Etagevælger"
      label="Etage"
      description="Vælg den etage du vil være på"
      onChange={(value) => setSelectedEtage(value)}
    >
    <Group mt="xl">
      <Radio value="1" label="1. etage" />  
      <Radio value="2" label="2. etage" />  
      <Radio value="3" label="3. etage" />  
      <Radio value="4" label="4. etage" />  
    </Group>
    </Radio.Group>
    </div>
  );
}