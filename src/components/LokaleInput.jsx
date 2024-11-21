import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

export default LokaleInput;

const lokale = ['Gruppelokale', 'Klasselokale', 'Open Learning', 'Diverse'];

function LokaleInput({ numberOfPeople }) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState(null);

  const options = lokale.map((item) => {
    let style = {};
    let disabled = false;

    // Disable 'Klasselokale' if numberOfPeople < 6
    if (item === 'Klasselokale' && numberOfPeople < 6) {
      style = { color: 'gray', pointerEvents: 'none', cursor: 'not-allowed' };
      disabled = true;
    } else if (item === value) {
      style = { backgroundColor: '#1c7ed6', color: 'white' };
    }

    return (
      <Combobox.Option
        value={item}
        key={item}
        style={style}
        disabled={disabled} // This ensures the option is marked as disabled.
      >
        {item}
      </Combobox.Option>
    );
  });

  return (
    <Combobox
      size='md'
      label="Lokaletype"
      description="Vælg hvilket type lokale I skal bruge."
      withAsterisk
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
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
