import { Radio, Group } from '@mantine/core';

export default EtageSelector

const containerStyling = {
    display: "flex",
    width: "13%",
    margin: "24px"
}

function EtageSelector() {
  return (
      <div style={containerStyling}>
      <Radio.Group 
      name="Etagevælger"
      label="Etage"
      description="Vælg den etage du vil være på"
    >
    <Group mt="xs">
      <Radio value="1" label="1. etage" />  
      <Radio value="2" label="2. etage" />  
      <Radio value="3" label="3. etage" />  
      <Radio value="4" label="4. etage" />  
    </Group>
    </Radio.Group>
    </div>
  );
}