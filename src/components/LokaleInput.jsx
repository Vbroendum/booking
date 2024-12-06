/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

export default LokaleInput;


// et array til vores combobox (component fra Matine), til de lokaler vi skal bruge
const lokale = ['Gruppelokale', 'Klasselokale', 'Open Learning', 'Diverse'];

function LokaleInput({ numberOfPeople, onLokaleSelect }) {
    const combobox = useCombobox({
      onDropdownClose: () => combobox.resetSelectedOption(),
    });
  
    const [value, setValue] = useState(null);
  // laver const lokale til et item, som vi bruger som value prop i vores combobox
    const options = lokale.map((item) => {
      let style = {};
      let disabled = false;
  
      // gør det umuligt for brugeren at vælge 'Klasselokale' hvis numberOfPeople < 6 som også kan ses af brugeren fra vores BookingAlert.jsx component
      if (item === 'Klasselokale' && numberOfPeople < 6) {
        style = { color: 'gray', pointerEvents: 'none', cursor: 'not-allowed' };
        disabled = true;
        // Hvis numberOfPeople er > 6 kan 'Klasselokale herefter vælges, og hvis et item i dropdown bliver valgt, vil det blive blå baggrund, og hvid text
      } else if (item === value) {
        style = { backgroundColor: '#1c7ed6', color: 'white' };
      }
  
      return (
        <Combobox.Option
          value={item}
          key={item}
          style={style}
          disabled={disabled}
        >
          {item}
        </Combobox.Option>
      );
    });
  
    return (
      <Combobox
        style={{ marginBottom: "15px" }}
        size="md"
        label="Lokaletype"
        description="Vælg hvilket type lokale I skal bruge."
        withAsterisk
        store={combobox}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
          if (onLokaleSelect) onLokaleSelect(val); // Notify parent
        }}
      >
        <Combobox.Target>
          <InputBase
            component="button"
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => combobox.toggleDropdown()}
          >
            {value || <Input.Placeholder>Vælg lokale</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>
  
        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    );
  }
  